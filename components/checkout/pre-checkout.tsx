import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../marketplace/shoppingCartContext/shoppingCartContext';
import { HStack, Button, Container, Heading, Text, VStack, FormControl, FormLabel, FormErrorMessage, Input  } from '@chakra-ui/react';
import { OrderItem } from '@/Interfaces/interfaces';
import PreCheckoutItem from './pre-checkout-item';
import type { Fulfillment,  OrderLineItem } from 'square';
import dayjs from 'dayjs';
import axios from 'axios';
import { uuid } from 'uuidv4';
import { checkoutNote } from './checkout-note';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
};

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

  const {orderItems, calculated } = useCart()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [formData, setFormData] = useState<FormData | null>(null);

  const onSubmit = (data: FormData) => {
    setFormData(data);
  };



  return (
    <Container width={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} maxW="container.md" mt="8">
    <Heading as="h1" mb="4">Pre-Checkout Page</Heading>
    <HStack width={'100%'}>
    <VStack spacing="4" align="start">
      {orderItems.map((item ) => {
        return (<PreCheckoutItem key={item.catalogObjectId} item={item}/>)
      })}
    </VStack>
    
    <VStack display={'flex'} justifyContent={'flex-start'} spacing={4} p={10}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name ? true : false}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" {...register('name', { required: 'Name is required' })} />
          <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email ? true : false}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" {...register('email', { required: 'Email is required' })} />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.phone ? true : false}>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input id="phone" type="tel" {...register('phone', { required: 'Phone number is required' })} />
          <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
        </FormControl>
      </form>
    </VStack>
    </HStack>
    <Text mt="4">Total Price: ${calculated ? calculated : 'Unable to calculate'}</Text>
    <Button type="submit" onClick={getPaymentLink}>
      Proceed to checkout
    </Button>
  </Container>
  );

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

    if(formData?.name && formData?.email && formData?.phone){

    const fulfillment = createPickupFulfillment(formData?.name, formData?.email, formData?.phone, null)

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
        redirectUrl: `${window.location.hostname}/plants`,
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

    console.log(request)

    try {

      const response = await axios.post('/api/createPaymentLink', request);

      if(response.data.url){
        window.location.href = response.data.url
      }
      
    
      console.log(response);
    } catch(error) {
      console.log(error);
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
}

  
};

export default PreCheckoutPage;
