import React from 'react';
import { Box, HStack, Button, Text, VStack } from '@chakra-ui/react';
import { PlaidProduct, PriceVariation} from '@/Interfaces/interfaces'
import { Variation } from './product-detail-view';

// make the size button stick, and then add to cart adds that size to cart
//

interface ProductDetailInfoPropTypes {
    priceVariation: Variation | undefined
    prices: PriceVariation[] ,
    selectPrice: (e: any, option: PriceVariation ) => void
}


const ProductDetailPrices: React.FC<ProductDetailInfoPropTypes> = ({ prices, priceVariation, selectPrice}) => {

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
        prices.map(
            (option) => {
                return(
                    <Button
                        onClick={(e) => selectPrice(e, option)}
                        key={option.price}
                        h='20%'
                        w='60%'
                        bg={'green.200'}
                        borderRadius={0}
                        borderWidth={priceVariation?.id === option.id ? 1 : 0}
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
    }
    </HStack>
    </VStack>
    
  );

  
};

export default ProductDetailPrices;
