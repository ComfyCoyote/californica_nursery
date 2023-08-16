import { Box, Button, ChakraProvider, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { createPayment, tokenize } from '../../square/squareFunctions'
import { Card } from 'square';
import { initializeCard } from '../../square/squareFunctions';


const CheckoutPage = () => {

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const appId = 'square app id'
  const locationId = 'square location id'

  const checkoutSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    cardNumber: Yup.string().required('Card number is required'),
    cardExpiration: Yup.string().required('Card expiration date is required'),
    cardCvv: Yup.string().required('CVV is required'),
  });

  return (
    <ChakraProvider>
      <Box maxW="md" mx="auto" py={8} px={4}>
        <VStack spacing={4} align="stretch">
          <Heading as="h1" size="lg" textAlign="center">
            Checkout
          </Heading>

          <Formik
            initialValues={{
              name: '',
              email: '',
              address: '',
              cardNumber: '',
              cardExpiration: '',
              cardCvv: '',
            }}
            validationSchema={checkoutSchema}
            onSubmit={(values) => console.log(values)}
          >
            <Form>
              <Field name="name">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl id="name" isInvalid={form.errors.name && form.touched.name}>
                    <FormLabel>Name</FormLabel>
                    <Input {...field} type="text" />
                    <ErrorMessage name="name" component={FormErrorMessage} />
                  </FormControl>
                )}
              </Field>

              <Field name="email">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl id="email" isInvalid={form.errors.email && form.touched.email}>
                    <FormLabel>Email</FormLabel>
                    <Input {...field} type="email" />
                    <ErrorMessage name="email" component={FormErrorMessage} />
                  </FormControl>
                )}
              </Field>

              <Field name="address">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl id="address" isInvalid={form.errors.address && form.touched.address}>
                    <FormLabel>Address</FormLabel>
                    <Input {...field} type="text" />
                    <ErrorMessage name="address" component={FormErrorMessage} />
                  </FormControl>
                )}
              </Field>

              <Field name="cardNumber">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl id="cardNumber" isInvalid={form.errors.cardNumber && form.touched.cardNumber}>
                    <FormLabel>Card Number</FormLabel>
                    <Input {...field} type="text" />
                    <ErrorMessage name="cardNumber" component={FormErrorMessage} />
                  </FormControl>
                )}
              </Field>

              <Field name="cardExpiration">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl id="cardExpiration" isInvalid={form.errors.cardExpiration && form.touched.cardExpiration}>
                    <FormLabel>Card Expiration</FormLabel>
                    <Input {...field} type="text" />
                    <ErrorMessage name="cardExpiration" component={FormErrorMessage} />
                  </FormControl>
                )}
              </Field>

              <Field name="cardCvv">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl id="cardCvv" isInvalid={form.errors.cardCvv && form.touched.cardCvv}>
                    <FormLabel>CVV</FormLabel>
                    <Input {...field} type="text" />
                    <ErrorMessage name="cardCvv" component={FormErrorMessage} />
                  </FormControl>
                )}
              </Field>

              <Button colorScheme="teal" type="submit">
                Place Order
              </Button>
            </Form>
          </Formik>

          <Text fontSize="sm" textAlign="center">
            This is a simple checkout page using Chakra UI, TypeScript, Next.js, and Formik.
          </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

  

export default CheckoutPage;
