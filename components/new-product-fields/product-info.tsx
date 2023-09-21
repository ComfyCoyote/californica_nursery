import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Select, Stack, Checkbox } from '@chakra-ui/react';
import { Field, FormikProps} from 'formik';
import { FormValues } from '@/pages/admin/product-management/newProduct';
import { useState } from 'react';

interface ProductInfoFormPropTypes {
  formik: any
}

export default function ProductInfoForm(props: ProductInfoFormPropTypes){

    const {formik} = props

    console.log(formik.values.size)

    return(
    <VStack width={'50%'} m={'10%'} spacing={4}>
            <FormControl isInvalid={formik.errors.size && formik.touched.size}>
            <FormLabel>Size</FormLabel>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
              <Checkbox 
                value={'1 Gallon'}
                onChange={(e) => checkSelect(e)} 
                size='sm' colorScheme='red'>
                1 Gallon
              </Checkbox>
              <Checkbox 
              value={'4 inches'}
              onChange={(e) => checkSelect(e)}
              size='md' colorScheme='green'>
                4 inches
              </Checkbox>
              <Checkbox 
              value={'6 oz'}
              onChange={(e) => checkSelect(e)}
              size='lg' colorScheme='orange'>
                6 oz
              </Checkbox>
              <Checkbox
              value={'extra small'} 
              onChange={(e) => checkSelect(e)}
              size='sm' colorScheme='red'>
                extra small
              </Checkbox>
              <Checkbox
              value={'small'} 
              onChange={(e) => checkSelect(e)}
              size='md' colorScheme='green'>
                small
              </Checkbox>
              <Checkbox
              value={'medium'} 
              onChange={(e) => checkSelect(e)}
              size='lg' colorScheme='orange'>
                medium
              </Checkbox>
              <Checkbox
              value={'large'} 
              onChange={(e) => checkSelect(e)}
              size='md' colorScheme='green'>
                large
              </Checkbox>
              <Checkbox
              value={'extra large'} 
              onChange={(e) => checkSelect(e)}
              size='lg' colorScheme='orange'>
                extra large
              </Checkbox>
            </Stack>
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

    function checkSelect(e: React.ChangeEvent<HTMLInputElement>){
      const index = formik.values.size.indexOf(e.target.value)
      if(index === -1){
        formik.setFieldValue('size', [...formik.values.size, e.target.value])
      } else if(index !== -1) {
        const newArr = formik.values.size.filter((_: any, item: number) => item !== index)
        formik.setFieldValue('size', newArr)
      }
    }
    
}