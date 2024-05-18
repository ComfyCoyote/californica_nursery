import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCart } from '../marketplace/shoppingCartContext/shoppingCartContext';
import { Checkbox, Button, Container, Heading, Text, VStack, useEditable } from '@chakra-ui/react';
import { OrderItem } from '@/Interfaces/interfaces';
import PreCheckoutItem from './pre-checkout-item';
import type { Fulfillment,  OrderLineItem } from 'square';
import dayjs from 'dayjs';
import axios from 'axios';
import { uuid } from 'uuidv4';


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


  return (
    <Container maxW="container.md" mt="8">
    <Heading as="h1" mb="4">Pre-Checkout Page</Heading>
    <VStack spacing="4" align="start">
      {orderItems.map((item ) => {
        return (<PreCheckoutItem key={item.catalogObjectId} item={item}/>)
      })}
    </VStack>
    <Text mt="4">Total Price: ${calculated ? calculated : 'Unable to calculate'}</Text>
    <Button onClick={getPaymentLink}>
      Proceed to checkout
    </Button>
  </Container>
  );

  function createPickupFulfillment(name: string, email: string, phone: string, note: string){
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



    const fulfillment = createPickupFulfillment('Muzzy Adamjee', 'muzzadamjee@gmail.com', '3107365643', 'Test Purchase')

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
      idempotencyKey: uuid(),
      order: order.order,
      checkoutOptions: {
        allowTipping: true,
        acceptedPaymentMethods: {
          applePay: true,
          googlePay: true,
          cashAppPay: true
        },
        appFeeMoney: {
          amount: 300,
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

  
};

export default PreCheckoutPage;
