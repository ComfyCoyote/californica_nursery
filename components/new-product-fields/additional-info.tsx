import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Button } from '@chakra-ui/react';
import { Field, FormikProps} from 'formik';
import { FormValues } from '@/pages/admin/product-management/newProduct';
import { addProduct } from '@/firebase/firebaseFunctions';

interface AdditionalInfoPropTypes {
    formik: any
}


export default function AdditionalInfo(props: AdditionalInfoPropTypes){

    const {formik} = props

    return(
        <VStack width={'50%'} m={'10%'} spacing={4}>
            <FormControl isInvalid={formik.errors.additionalInfo && formik.touched.additionalInfo}>
              <FormLabel>Details</FormLabel>
              <Input type="text" name="additionalInfo" id="additionalInfo" onChange={formik.handleChange} value={formik.values.additionalInfo}/>
              <FormErrorMessage>{formik.errors.additionalInfo}</FormErrorMessage>
            </FormControl>
            <Button type='submit' colorScheme="blue" onClick={formik.handleSubmit}>
                Submit
            </Button>
        </VStack>
    )

   
}