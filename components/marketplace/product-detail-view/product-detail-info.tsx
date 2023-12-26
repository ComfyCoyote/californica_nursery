import React from 'react';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import Link from 'next/link';

interface ProductDetailInfoPropTypes {
    item: PlaidProduct
}



const ProductDetailInfo: React.FC<ProductDetailInfoPropTypes> = ({ item }) => {

  return(
    <VStack 
    h='100%'
    w='65%'
    display={'flex'} 
    alignItems={'flex-start'}
>
    <Box
        bg='green.200'>
    <Text 
        fontWeight={600}
        fontSize={'2xl'}>
        {item?.name && getComName(item?.name)}
    </Text>
    <Text
        fontStyle={'italic'}>
        {item?.name ? 
        getSciName(item?.name) 
        :
        ''
        }
    </Text>
    </Box>
    <Text>
        {item.description}
    </Text>
    <VStack
        display={'flex'} 
        alignItems={'flex-start'}>
        <HStack>
        <Text fontWeight={600}>
            {`TYPE: `}
        </Text>
        <Text>
            Annual
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`MATURE SIZE: `}
        </Text>
        <Text>
            4ft
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`FORM: `}
        </Text>
        <Text>
            Spreading
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`GROWTH: `}
        </Text>
        <Text>
            Moderate
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`DORMANCY: `}
        </Text>
        <Text>
            Winter
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`FLOWERING: `}
        </Text>
        <Text>
            Summer
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`DIFFICUTY: `}
        </Text>
        <Text>
            Moderate
        </Text>
        </HStack>
    </VStack>
    </VStack>
    
  );

  function getComName(name: string){
    const start = name.indexOf('(')

    if(start){

        return name.slice(0, start - 1)

    } else {

        return ''
    }
  }

  function getSciName(name: string ){
    const start = name.indexOf('(')
    const end = name.indexOf(')') 

    if(start !== -1 && end !== -1){

        return name.slice(start + 1, end)

    } else {

        return ''
    }

}

  
};

export default ProductDetailInfo;
