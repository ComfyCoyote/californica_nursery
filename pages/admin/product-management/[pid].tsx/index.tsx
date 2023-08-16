/**
 * What properties do products need?
 * Id : string
 * Name: string
 * Description: string
 * Quantity: number
 * Price: float
 * Type: string
 * Date_added : date
 * Date_removed : date
 * Added_by: string
 * Owner: string
 * 
 */

//import 'react-app-polyfill/ie11';

'use client'


import UploadImageContainer from '@/components/upload-image';
import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, VStack, Select } from '@chakra-ui/react';
import { Field, Form, Formik, ErrorMessage, FormikProps} from 'formik';
import { addDoc, collection } from "firebase/firestore";
import { db } from '@/firebase/firebaseInit'; 
import * as yup from 'yup'
import AlertComponent from '@/components/alert';
import { useState } from 'react'
import { useRouter } from 'next/router';
import { Product } from '@/Interfaces/interfaces';
import { GetServerSideProps } from 'next';
import { doc, getDoc } from "firebase/firestore";
import path from 'path';

interface FormValues {
  name: string;
  description: string;
  category: string;
  sub_category: string;
  listing_status: string;
  quantity: string;
  size: string;
  sku: string;
  price: string;
  owner: string
}

interface EditItemPropTypes {

    item: Product 
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('description is required'),
  type: yup.string().required('Type is required'),
  category: yup.string().required('Category is required'),
  sub_category: yup.string(),
  quantity: yup.string().required('Quantity is required'),
  listing_status: yup.string().required('Listing Status is required'),
  sku: yup.string(),
  price: yup.string().required('Price is required'),
  owner: yup.string()
});

const messages = [
  'Successfully added item to database',
  'An error occured please try again'
]



function EditProduct({item} : EditItemPropTypes) {

  const [alert, setAlert] = useState(false)
  const [error, setError] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [imgName, setImgName] = useState('')

  const { pathname } = useRouter()

  const initialValues: FormValues = {
    name: item.name,
    category: item.category,
    sub_category: item.sub_category,
    size: item.size,
    description: item.description,
    quantity: item.quantity,
    sku: item.sku,
    listing_status: item.listing_status,
    price: item.price,
    owner: item.owner
  };

  const handleSubmit =  (values: FormValues, actions: any) => {
    // Handle form submission logic here
    // Add a new document in collection "cities"
    setImgName(values.name)
    addDoc(collection(db, "Products"), values)
    .then(() => {

      setAlert(true)
      setIsUploading(true)

      actions.resetForm();
      actions.setSubmitting(false);
  })
    .catch((error) => {
      
      setError(true)
      console.log(error)
    }
    
  )};

  const toggleAlert = () => {

    setAlert(false)

  }




  return (
    <Box width={'100%'} mx="auto" >
      <AlertComponent display={alert} status={error ? 'error' : 'success'} message={error ? messages[1] : messages[0]} toggleFunction={toggleAlert} />
      <HStack width={'100%'}>
        <UploadImageContainer isUploading={isUploading} imgName={imgName}/>
        <Box width={'50%'} m={'10%'}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {(formikProps: FormikProps<FormValues>) => (
        <Form>
          <VStack width={'50%'} m={'10%'} spacing={4}>
            <Field>
            {({field, form} : { field: any; form: any }) => (
            <FormControl isInvalid={form.errors.name && form.touched.name}>
              <FormLabel>Name</FormLabel>
              <Field as={Input} type="text" name="name" />
              <FormErrorMessage>{form.errors.name}</FormErrorMessage>
            </FormControl>
              )}
            </Field>

            <Field>
            {({field, form} : { field: any; form: any }) => (
            <FormControl isInvalid={form.errors.description && form.touched.description}>
              <FormLabel>Description</FormLabel>
              <Field as={Input} type="text" name="description" />
              <FormErrorMessage>{form.errors.description}</FormErrorMessage>
            </FormControl>
            )}
            </Field>

            <Field>
            {({field, form} : { field: any; form: any }) => (
            <FormControl isInvalid={form.errors.quantity && form.touched.quantity}>
              <FormLabel>Quantity</FormLabel>
              <Field as={Input} type="text" name="quantity" />
              <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
            </FormControl>
            )}
            </Field>

            <Field>
            {({field, form} : { field: any; form: any }) => (
            <FormControl isInvalid={form.errors.price && form.touched.price}>
              <FormLabel>Price</FormLabel>
              <Field as={Input} type="text" name="price" />
              <FormErrorMessage>{form.errors.price}</FormErrorMessage>
            </FormControl>
            )}
            </Field>

            <Field>
            {({field, form} : { field: any; form: any }) => (
            <FormControl isInvalid={form.errors.sku && form.touched.sku}>
              <FormLabel>{'SKU - optional'}</FormLabel>
              <Field as={Input} type="text" name="sku" />
              <FormErrorMessage>{form.errors.sku}</FormErrorMessage>
            </FormControl>
            )}
            </Field>
            <Field>
            {({field, form, setFieldValue} : {field: any; form: any; setFieldValue: any}) => (
            <FormControl isInvalid={form.errors.category && form.touched.category}>
            <FormLabel>Category</FormLabel>
            <Select
              onChange={(e) => formikProps.setFieldValue('category', e.target.value)}
            >
              <option value='Plants'>Plants</option>
              <option value='Seeds'>Seeds</option>
              <option value='Soil'>Soil</option>
              <option value='Merchandis'>Merchandise</option>
              <option value='Clothing'>Clothing</option>
            </Select>
            <FormErrorMessage>{form.errors.category}</FormErrorMessage>
            </FormControl>
            )}
            </Field>
            <Field>
            {({field, form, setFieldValue} : {field: any; form: any; setFieldValue: any}) => (
            <FormControl isInvalid={form.errors.sub_category && form.touched.sub_category}>
            <FormLabel>Sub Category</FormLabel>
            <Select
              onChange={(e) => formikProps.setFieldValue('sub_category', e.target.value)}
            >
              <option value='Plants'>T-Shirts</option>
              <option value='Seeds'>Stickers</option>
            </Select>
            <FormErrorMessage>{form.errors.sub_category}</FormErrorMessage>
            </FormControl>
            )}
            </Field>
            <Field>
            {({field, form, setFieldValue} : {field: any; form: any; setFieldValue: any}) => (
            <FormControl isInvalid={form.errors.size && form.touched.size}>
            <FormLabel>Size</FormLabel>
            <Select
              onChange={(e) => formikProps.setFieldValue('size', e.target.value)}
            >
              <option value='1Gal'>1 Gallon</option>
              <option value='4in'>4 inches</option>
              <option value='6oz'>6 oz</option>
            </Select>
            <FormErrorMessage>{form.errors.size}</FormErrorMessage>
            </FormControl>
            )}
            </Field>
            <Field>
            {({field, form} : { field: any; form: any }) => (
            <FormControl isInvalid={form.errors.owner && form.touched.owner}>
              <FormLabel>{'Owner - optional'}</FormLabel>
              <Field as={Input} type="text" name="owner" />
              <FormErrorMessage>{form.errors.owner}</FormErrorMessage>
            </FormControl>
            )}
            </Field>
            <Field>
            {({field, form, setFieldValue} : {field: any; form: any; setFieldValue: any}) => (
            <FormControl isInvalid={form.errors.listing_status && form.touched.listing_status}>
            <FormLabel>Listing Status</FormLabel>
            <Select
              onChange={(e) => formikProps.setFieldValue('listing_status', e.target.value)}
            >
              <option value='listed'>Listed</option>
              <option value='unlisted'>Unlisted</option>
            </Select>
            <FormErrorMessage>{form.errors.listing_status}</FormErrorMessage>
            </FormControl>
            )}
            </Field>

            <Button type="submit" colorScheme="blue" isLoading={formikProps.isSubmitting}>
              Submit
            </Button>
          </VStack>
        </Form>
        )}
      </Formik>
      </Box>
      </HStack>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
    try {

        const {pathname} = useRouter()
        const arr = pathname.split('/')
        const id = arr[arr.length]
        const docRef = doc(db, "Products", id);
        const item = await getDoc(docRef);

      
  
      return {
        props: {
          item
        }
      };
    } catch (error) {
      console.error('Error fetching data: ', error);
      
      return {
        props: {}
      };
    }
  }
export default EditProduct;












