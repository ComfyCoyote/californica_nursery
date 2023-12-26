import React from 'react';
import { Box, HStack, Button, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import Link from 'next/link';
import { randomUUID } from 'crypto';

interface ProductDetailInfoPropTypes {
    item: PlaidProduct
}


const ProductDetailPrices: React.FC<ProductDetailInfoPropTypes> = ({ item }) => {


  return(
    <VStack
    display={'flex'}
    alignItems='flex-start'>
    <Text
        fontWeight={600}>
        Size
    </Text>
    <HStack
        display={'flex'}
        alignItems='flex-start'
    >
    {
        item?.price ? item?.price.map(
            (option) => {

                return(
                    <Button
                        key={option.price}
                        h='20%'
                        w='60%'
                        bg={'green.200'}
                        borderRadius={0}
                        borderWidth={1}
                        borderColor={'black'}>
                        <Box>
                            <VStack>
                                <Text>
                                    {option.type}
                                </Text>
                                <Text>
                                    {`$${Number(option.price)/100}`}
                                </Text>
                            </VStack>
                        </Box>
                    </Button>

                )
            }
        )
        
        :
        
        <Text>
            No Pricing Options
        </Text>
    }
    </HStack>
    </VStack>
    
  );

  
};

export default ProductDetailPrices;
