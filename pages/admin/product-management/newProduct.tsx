'use client'

import { Box } from '@chakra-ui/react';
import { useFormik, FormikProvider} from 'formik';
import { addDoc, collection } from "firebase/firestore";
import { db } from '@/firebase/firebaseInit'; 
import * as yup from 'yup'
import AlertComponent from '@/components/alert';
import { useState } from 'react'
import NewProductTabBar from '@/components/new-product-fields/field-tab-bar';
import { Button } from '@chakra-ui/react';
import { plantImageRef } from '@/firebase/firebaseInit';
import { uploadBytes, ref } from 'firebase/storage';

export interface FormValues {
  name: string;
  description: string;
  category: string;
  size: string | null;
  sub_category: string;
  listing_status: string;
  quantity: string;
  sku: string;
  price: string;
  owner: string;
  additionalInfo: string;
}

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('description is required'),
  type: yup.string().required('Type is required'),
  category: yup.string().required('Category is required'),
  size: yup.string(),
  sub_category: yup.string(),
  quantity: yup.string().required('Quantity is required'),
  listing_status: yup.string().required('Listing Status is required'),
  sku: yup.string(),
  price: yup.string().required('Price is required'),
  owner: yup.string(),
  additionalInfo: yup.string()
});

const messages = [
  'Successfully added item to database',
  'An error occured please try again'
]



function NewProduct() {

  const [alert, setAlert] = useState(false)
  const [error, setError] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [selectedImage, setSelectedImage] = useState<File[]>([])

  const initialValues: FormValues = {
    name: '',
    category: '',
    sub_category: '',
    size: '',
    description: '',
    quantity: '',
    sku: '',
    listing_status: '',
    price: '',
    owner: '',
    additionalInfo: ''
  };

  const handleFirebaseUpload = async () => {
    if(selectedImage){
      selectedImage.forEach((image) => {

        const imageRef = ref(plantImageRef, `${formik.values.name} - ${selectedImage.indexOf(image) + 1}` );
        uploadBytes(imageRef, image).then((snapshot) => {
          console.log('Uploaded a blob or file!');
        }).catch((error) => {
          console.log(error)
        });


      })
    
  }
  }
  

  const handleSubmit = (values: FormValues, actions: any) => {
    
    addDoc(collection(db, "Products"), values)
    .then(() => {

      handleFirebaseUpload().then(() =>{

      setAlert(true)
      setIsUploading(true)

      actions.resetForm();
      actions.setSubmitting(false);

      }).catch((error) => {

        setError(true)
        console.log(error)

      })

      
  })
    .catch((error) => {
      
      setError(true)
      console.log(error)
    }
    
  )};

  const toggleAlert = () => {

    setAlert(false)

  }


  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <Box width={'100%'} mx="auto" >
      <AlertComponent display={alert} status={error ? 'error' : 'success'} message={error ? messages[1] : messages[0]} toggleFunction={toggleAlert} />
        <Box width={'100%'} height={'100%'}>
          <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <NewProductTabBar 
          selectedImage={selectedImage} 
          setSelectedImage={setSelectedImage} 
          formik={formik}/>
          <Button type='submit'>
            Submit
          </Button>
        </form>
        </FormikProvider>
        </Box>
      </Box>
  );
}

export default NewProduct;












