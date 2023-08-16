import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Select } from '@chakra-ui/react';
import { Field} from 'formik';

interface PriceFormPropTypes {
  formik: any
}




export default function PriceForm(props: PriceFormPropTypes){

  const {formik} = props

    return(
        <VStack width={'50%'} m={'10%'} spacing={4}>
            <FormControl isInvalid={formik.errors.price && formik.touched.price}>
              <FormLabel>Price</FormLabel>
              <Input type="text" id="price" name="price" onChange={formik.handleChange} value={formik.values.price} />
              <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.quantity && formik.touched.quantity}>
              <FormLabel>Quantity</FormLabel>
              <Input type="text" id="quantity" name="quantity" onChange={formik.handleChange} value={formik.values.quantity}/>
              <FormErrorMessage>{formik.errors.quantity}</FormErrorMessage>
            </FormControl>
            </VStack>
    )
}