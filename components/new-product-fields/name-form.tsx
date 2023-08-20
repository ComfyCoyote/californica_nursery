import { VStack, FormControl, FormLabel, FormErrorMessage, Input, Select, Textarea } from '@chakra-ui/react';
import { Field } from 'formik';

interface NameFormPropTypes {
    formik: any
}

export default function NameForm(props : NameFormPropTypes){

    const {formik} = props

    console.log(formik.values)

    return(
        <VStack width={'50%'} m={'10%'} spacing={4}>
            <FormControl isInvalid={formik.errors.name && formik.touched.name}>
              <FormLabel>Name</FormLabel>
              <Input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.description && formik.touched.description}>
              <FormLabel>Description</FormLabel>
              <Textarea id="description" name="description" onChange={formik.handleChange} value={formik.values.description}/>
              <FormErrorMessage>{formik.errors.description}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.category && formik.touched.category}>
            <FormLabel>Category</FormLabel>
            <Select
              id="category"
              name="category"
              value={formik.values.category}
              onChange={(e) => formik.setFieldValue('category', e.target.value)}
            >
              <option value=''>None</option>
              <option value='Plants'>Plants</option>
              <option value='Seeds'>Seeds</option>
              <option value='Soil'>Soil</option>
              <option value='Merchandise'>Merchandise</option>
              <option value='Clothing'>Clothing</option>
            </Select>
            <FormErrorMessage>{formik.errors.category}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.sub_category && formik.touched.sub_category}>
            <FormLabel>Sub Category</FormLabel>
            <Select
              id="sub_catgeory"
              name="sub_category"
              value={formik.values.sub_category}
              onChange={(e) => formik.setFieldValue('sub_category', e.target.value)}
            >
              <option value=''>None</option>
              <option value='Plants'>T-Shirts</option>
              <option value='Seeds'>Stickers</option>
            </Select>
            <FormErrorMessage>{formik.errors.sub_category}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.sku && formik.touched.sku}>
              <FormLabel>{'SKU - optional'}</FormLabel>
              <Input id="sku" value={formik.values.sku} onChange={formik.handleChange} type="text" name="sku" />
              <FormErrorMessage>{formik.errors.sku}</FormErrorMessage>
            </FormControl>
            </VStack>
    )
}