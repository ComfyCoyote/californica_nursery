import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Select } from '@chakra-ui/react';
import { Field, FormikProps} from 'formik';
import { FormValues } from '@/pages/admin/product-management/newProduct';

interface ProductInfoFormPropTypes {
  formik: any
}

export default function ProductInfoForm(props: ProductInfoFormPropTypes){

  const {formik} = props

    return(
    <VStack width={'50%'} m={'10%'} spacing={4}>
            <FormControl isInvalid={formik.errors.size && formik.touched.size}>
            <FormLabel>Size</FormLabel>
            <Select
              id="size"
              name="size"
              value={formik.values.size}
              onChange={(e) => formik.setFieldValue('size', e.target.value)}
            >
              <option value=''>None</option>
              <option value='1Gal'>1 Gallon</option>
              <option value='4in'>4 inches</option>
              <option value='6oz'>6 oz</option>
              <option value='xsm'>extra small</option>
              <option value='sm'>small</option>
              <option value='m'>medium</option>
              <option value='l'>large</option>
              <option value='xl'>extra large</option>
            </Select>
            <FormErrorMessage>{formik.errors.size}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.owner && formik.touched.owner}>
              <FormLabel>{'Owner - optional'}</FormLabel>
              <Input type="text" id="owner" name="owner"onChange={formik.handleChange} value={formik.values.owner} />
              <FormErrorMessage>{formik.errors.owner}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.listing_status && formik.touched.listing_status}>
            <FormLabel>Listing Status</FormLabel>
            <Select
            id="listing_status"
            name="listing_status"
            value={formik.values.listing_status}
              onChange={(e) => formik.setFieldValue('listing_status', e.target.value)}
            >
              <option value=''>None</option>
              <option value='listed'>Listed</option>
              <option value='unlisted'>Unlisted</option>
            </Select>
            <FormErrorMessage>{formik.errors.listing_status}</FormErrorMessage>
            </FormControl>
        </VStack>
    )
    
}