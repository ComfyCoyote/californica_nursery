import React from 'react';
import { HStack, Text, VStack } from '@chakra-ui/react';
import {  Plant } from '@/Interfaces/interfaces'
import { theme } from '@/theme/theme';


interface ProductDetailInfoPropTypes {
    item: Plant,
    type: string
}

const ProductDetailInfo: React.FC<ProductDetailInfoPropTypes> = ({ item, type}) => {
    
    return(
        <React.Fragment>
        <VStack
            display={'flex'}
            alignItems={'flex-start'}
            bg={getColor(type)}
            spacing={-1}
        >
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
        </VStack>
        <Text>
            {item.description}
        </Text>
        {
            type === 'plants' &&
            <VStack
            display={'flex'} 
            alignItems={'flex-start'}
            spacing={-1}>
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
                {`DIFFICULTY: `}
            </Text>
            <Text>
                {item.plantAttributes?.difficulty?.join(', ')}
            </Text>
            </HStack>
        </VStack>

    }
    </React.Fragment>
  
  );

  function getColor(type: string){
    switch(type){
      case 'plants':
        return theme.palette.lime
      case 'seeds':
        return theme.palette.skyBlue
      case 'merch':
        return theme.palette.purple
    }
  }

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
