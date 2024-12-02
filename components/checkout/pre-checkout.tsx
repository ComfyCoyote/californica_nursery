import { useState } from 'react';
import { useCart } from '../marketplace/shoppingCartContext/shoppingCartContext';
import { Stack, Button, Container, Heading, Text, VStack, FormControl, FormLabel, Input  } from '@chakra-ui/react';
import { OrderItem } from "@/Interfaces/interfaces";
import PreCheckoutItem from './pre-checkout-item';
import type { Fulfillment,  OrderLineItem } from 'square';
import dayjs from 'dayjs';
import axios from 'axios';
import { uuid } from 'uuidv4';
import { checkoutNote } from './checkout-note';
import { useForm } from 'react-hook-form';
import ErrorAlert from './error-alert';


interface Error {
  title: string,
  desc: string,
  status: boolean
}

const PreCheckoutPage: React.FC = () => {
  // Sample items data
  // State to store selected items
  // notify users that orders made are available friday-sunday
  // orders made on friday will be available next friday

  //if you have any questions about your order email californicanursery@gmail.com
  
  //post purchase message to inform client when and where pickup is

  //all purchases should have california sales tax

  //provide the redirect url for when users purchase, redirect to the marketplace page!
  
  //sometimes the checkout page doesnt load immediately

  const { orderItems, calculated } = useCart(); // Assuming useCart provides orderItems, calculated, and getPaymentLink

  const { formState: { errors } } = useForm();

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState<Error>({status: false, title: '', desc: ''})


  return (
    <Container width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} maxW="container.md" mt="8">
      <Heading as="h1" mb="4">Review Items</Heading>
      {error.status && <ErrorAlert title={error.title} description={error.desc}/>}
      <Stack width={'100%'} direction={{base: 'column', md: 'row'}}>
        <VStack spacing="4" align="start">
          {orderItems.map((item) => (
            <PreCheckoutItem key={item.catalogObjectId} item={item} />
          ))}
        </VStack>
        <VStack display={'flex'} justifyContent={'flex-start'} spacing={4} p={10}>
          <FormControl isInvalid={errors.name ? true : false}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" type="text" onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl isInvalid={errors.email ? true : false}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
          </FormControl>

          <FormControl isInvalid={errors.phone ? true : false}>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <Input id="phone" type="tel" value={phone} onChange={(e) => handlePhoneChange(e)} />
          </FormControl>

          <Button type="button" onClick={getPaymentLink} mt={4}>
            Proceed to checkout
          </Button>
        </VStack>
      </Stack>
      <Text mt="4">Total Price: ${calculated ? calculated : 'Unable to calculate'}</Text>
    </Container>
  )

  function validatePhoneNumber(phoneNumber: string) {
    // Regular expression for North American phone number format (e.g., (123) 456-7890)
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    
    return phoneRegex.test(phoneNumber);
  }

  function validateEmail(email: string) {
    // Regular expression for validating an email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(email);
  }

  function validateForm(){

      if(!name){
        setError({status: true, title: 'Invalid Name', desc: 'Please provide a name so that we can process your order accurately'})
        return false
      } else if(!validatePhoneNumber(phone)){
        setError({status: true, title: 'Invalid Phone', desc: 'Please provide a valid phone number so that we can update you on your order'})
        return false

      } else if(!validateEmail(email)){
        setError({status: true, title: 'Invalid Email', desc: 'Please provide a valid email so that we can send purchase receipt'})
        return false
      } else{

        return true
      }

  }

  function createPickupFulfillment(name: string, email: string, phone: string, note: string | null){
    const date = dayjs()
    const expires = date.add(1, 'day')
    const pickup = date.add(1, 'hour')

    const fulfillment = {
      type: 'PICKUP',
      state: 'PROPOSED',
      pickupDetails: {
        recipient: {
          displayName: name,
          emailAddress: email,
          phoneNumber: phone
        },
        expiresAt: expires.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'), //get expiration time
        scheduleType: 'SCHEDULED',
        pickupAt: pickup.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'), //get pickup time
        note: note
      }
    } as Fulfillment

    return fulfillment
    
  }

  function createOrder(lineItems: OrderLineItem[], fulfillments: Fulfillment[], locationId: string){


    const order = {
      order: {
        locationId: locationId,
        lineItems: lineItems,
        fulfillments: fulfillments
      },
      idempotencyKey: uuid()
    }
  
    return order
    
  }

  async function getPaymentLink(){

    const valid = validateForm()

    if(valid){

      const fulfillment = createPickupFulfillment(name, email, phone, null)

      const stJosephs = 'L3C4J69QTRCAA'

      const lineItems: OrderLineItem[] = orderItems.map((item : OrderItem) => {

        const line = {
          'quantity': item.quantity,
          'appliedTaxes': item.appliedTaxes,
          'appliedDiscounts': item.appliedDiscounts,
          'catalogObjectId': item.catalogObjectId
        } as OrderLineItem

        return line
      })

      const order = createOrder(lineItems, [fulfillment], stJosephs)

      const request = {
        paymentNote: checkoutNote,
        idempotencyKey: uuid(),
        order: order.order,
        checkoutOptions: {
          allowTipping: true,
          redirectUrl: `https://${window.location.host}/plants?fromcheckout=true`,
          acceptedPaymentMethods: {
            applePay: true,
            googlePay: true,
            cashAppPay: true
          },
          appFeeMoney: {
            amount: 0,
            currency: 'USD'
          }
        }
      }

      try {

        const response = await axios.post('/api/createPaymentLink', request);

        if(response.data.url){
          sessionStorage.removeItem("orderItems")
          sessionStorage.removeItem("calculated")
          window.location.href = response.data.longUrl
        }
        
      } catch(error) {
        console.log(error);
        setError({status: true, title: 'Request Error', desc: 'Sorry but there was an error in processing your request, please try again later.'})
      }
    }
  }

  function formatUSD(centsBigInt: bigint) {
    // Convert BigInt value to a regular number (float)
    const cents = Number(centsBigInt) / 100;

    // Use toLocaleString() to format the number into a localized string
    return cents.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>){
    const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    let formatted = '';

    // Format as (112) 123-1234
    if (input.length >= 1) {
      formatted += `(${input.slice(0, 3)}`;
    }
    if (input.length > 3) {
      formatted += `) ${input.slice(3, 6)}`;
    }
    if (input.length > 6) {
      formatted += `-${input.slice(6, 10)}`;
    }


    // Update state
    setPhone(formatted);
;
  };

}

  

export default PreCheckoutPage;
