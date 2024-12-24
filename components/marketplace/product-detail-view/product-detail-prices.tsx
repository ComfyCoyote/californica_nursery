import React from 'react';
import { Box, HStack, Button, Text, VStack } from '@chakra-ui/react';
import { PriceVariation} from '@/Interfaces/interfaces'
import { Variation } from './product-detail-view';
import { theme } from '@/theme/theme';

interface ProductDetailInfoPropTypes {
    priceVariation: Variation | undefined
    prices: PriceVariation[] ,
    selectPrice: (e: any, option: PriceVariation ) => void,
    type: string
}


const ProductDetailPrices: React.FC<ProductDetailInfoPropTypes> = ({ prices, priceVariation, selectPrice, type}) => {

  return(
    <HStack
        display={'flex'}
        alignItems='flex-start'
    >
    {
        prices.map(
            (option) => {
    
                return(
                    <Button
                        isDisabled={option.amount === "0"}
                        padding={7}
                        onClick={(e) => selectPrice(e, option)}
                        key={option.price}
                        bg={getColor(type)}
                        borderRadius={0}
                        borderWidth={priceVariation?.id === option.id ? 1 : 0}
                        borderColor={'black'}
                        width="100%" // Ensures the button fills its container width
                        maxWidth="200px" // Limits maximum width of the button>
                        >
                        <Box>
                            <VStack>
                                <Text>
                                    {formatSizeText(option.type)}
                                </Text>
                                <Text>
                                    {option.amount === "0" ? 'out of stock' : `$${Number(option.price)/100}`}
                                </Text>
                            </VStack>
                        </Box>
                    </Button>

                )
            }
        )
    }
    </HStack>
    
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

  function formatSizeText(text: string) : string {
    console.log(text)

    const cut = text.slice(0, 5)

    const upper = cut.toUpperCase()

    return upper

  }

  
};

export default ProductDetailPrices;
