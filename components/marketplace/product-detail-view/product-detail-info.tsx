import React from 'react';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import Link from 'next/link';

interface ProductDetailInfoPropTypes {
    item: Plant 
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
        fontWeight={700}
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
            {`LIFE CYCLE: `}
        </Text>
        <Text>
            {item.plantAttributes?.lifeCycle?.join(', ')}
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {'PLANT TYPE:'}
        </Text>
        <Text>
        {item.plantAttributes?.plantType?.join(', ')}
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`GROWTH: `}
        </Text>
        <Text>
            {item.plantAttributes?.growthForm?.join(', ')}
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`DORMANCY: `}
        </Text>
        <Text>
            {item.plantAttributes?.dormancy?.join(', ')}
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`FLOWERING: `}
        </Text>
        <Text>
            {item.plantAttributes?.flowerColor?.join(', ')}
        </Text>
        </HStack>
        <HStack>
        <Text fontWeight={600}>
            {`DIFFICUTY: `}
        </Text>
        <Text>
            {item.plantAttributes?.difficulty?.join(', ')}
        </Text>
        </HStack>
    </VStack>
    </VStack>
    
  );

  function getComName(name: string){
    const start = name.indexOf('(')

    if(start){

        return name.slice(0, start - 1).toUpperCase()

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
