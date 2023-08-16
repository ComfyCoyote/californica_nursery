import { Box } from '@chakra-ui/react'
import { PaymentForm, CreditCard } from 'react-square-web-payments-sdk'
import { CartProvider, useCart } from '@/shoppingCartContext/shoppingCartContext'
import ProductList from './itemList'
import axios from 'axios'

const Home = () => {

  const { cartItems } = useCart()
  console.log(cartItems)

  return (
    <Box maxW="md" mx="auto" py={8} px={4}>
      <ProductList products={cartItems}/>
      <PaymentForm
        applicationId="sandbox-sq0idb-N3YbZYvGLWBmfrZPFhf26g"
        createVerificationDetails={() => ({
            // You can avoid amount and currency if the intent is `STORE`
            amount: '1.00',
            currencyCode: 'GBP',
            // `CHARGE` or `STORE`
            intent: 'CHARGE',
            billingContact: {
              addressLines: ['123 Main Street', 'Apartment 1'],
              familyName: 'Doe',
              givenName: 'John',
              email: 'jondoe@gmail.com',
              country: 'GB',
              phone: '3214563987',
              region: 'LND',
              city: 'London',
            },
          })}
        cardTokenizeResponseReceived={(token, verifiedBuyer) => {
            requestTokenizeResponseRecevied(token.token, verifiedBuyer);
        }}
        locationId='L6PK5BFWP0F9J'
      >
        <CreditCard 
            buttonProps={{
                css: {
                  backgroundColor: "#771520",
                  fontSize: "14px",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#530f16",
                  }},}}/>
      </PaymentForm>
      </Box>
  )

  async function requestTokenizeResponseRecevied(token: string | undefined, verifiedBuyer: any){
    console.log('REQUEST TOKEN CALLBACK')
    console.log(token)
    console.log(verifiedBuyer)
    const response = await axios.post("/api/pay", 
        {sourceId: token, amountMoney: 1000 }, {
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
  }

   function verificationDetails(){
    return({
    // You can avoid amount and currency if the intent is `STORE`
    amount: '1.00',
    currencyCode: 'GBP',
    // `CHARGE` or `STORE`
    intent: 'CHARGE',
    billingContact: {
      addressLines: ['123 Main Street', 'Apartment 1'],
      familyName: 'Doe',
      givenName: 'John',
      email: 'jondoe@gmail.com',
      country: 'GB',
      phone: '3214563987',
      region: 'LND',
      city: 'London',
    },
  })}
}

export default Home