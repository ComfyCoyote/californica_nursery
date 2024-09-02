import React from 'react';
import { Box, Stack, VStack, Button } from '@chakra-ui/react';
import { OrderItem, Plant, Merch, Seed, PriceVariation } from '@/Interfaces/interfaces'
import { useCart } from '../shoppingCartContext/shoppingCartContext';
import { useState } from 'react';
import ProductDetailInfo from './product-detail-info';
import ProductDetailImages from './product-detail-images';
import ProductDetailPrices from './product-detail-prices';
import CustomAlert from '@/components/shared-components/alert';
import { theme } from '@/theme/theme';

const success = 'Added item to cart!'
const fail = 'Unable to add item to cart!'


interface ProductCardPropTypes {
    item: Plant | Merch | Seed,
    type: string
}

export interface Variation {
    name: string,
    id: string
}


const ProductDetailView: React.FC<ProductCardPropTypes> = ({item, type}) => {

    const { addToCart } = useCart()

    const [priceVariation, setPriceVariation] = useState<Variation>()
    const [alert, setAlert] = useState(false)


    const selectPrice = (event: React.MouseEvent<HTMLButtonElement>, option: PriceVariation ) => {

        setPriceVariation({id: option.id, name: option.type} as Variation)
    }

    return(
        <Box
            bg={theme.palette.cream}
            p={{base: 0, md: 30}}
            pt={{base: 20, md: 30}}  
            h={'100%'} 
            w={'100%'}>
        <Stack 
            mt={{base: 0, md: 20}}
            p={{base: 10, md: 50}}
            h='100%'
            w='100%'
            spacing={{base: 5, md: 20}}
            direction={{base: 'column', md: 'row'}}
            >
                <ProductDetailImages item={item}/>
                <VStack
                    spacing={10}
                    w='100%'
                    h={{base: 975, md: 719}}
                    display={'flex'}
                    alignItems={'flex-start'}>
                <ProductDetailInfo item={item} type={type}/>
                {
                    item.price && <ProductDetailPrices 
                                        type={type} 
                                        prices={item.price} 
                                        selectPrice={selectPrice} 
                                        priceVariation={priceVariation}
                                    />
                }
                <Button
                    size={'lg'}
                    isDisabled={!priceVariation}
                    onClick={(event) => handleAddToCartClick(event)}
                    bg={getColor(type)}
                    borderRadius={0}
                    borderWidth={1}
                    borderColor={'black'}>
                        add to cart!
                </Button>
                <CustomAlert display={alert} status={'success'} message={success} toggleFunction={() => { setAlert(!alert)}}/>
                </VStack>
        </Stack>
        </Box>
    )


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


    function handleAddToCartClick(event: React.MouseEvent<HTMLButtonElement>){
        const price = item?.price?.filter((i) => i.id === priceVariation?.id)
        let val;
        if(price){
            val = price[0]
        }
        const orderItem =  {
            name: `${item.name} ${priceVariation?.name}`, 
            quantity: '1', 
            catalogObjectId: priceVariation?.id, 
            //appliedTaxes: [{'taxUid': 'SMCQJAH25YSCS7RP5G2I5OHN'} as OrderLineItemAppliedTax],
            appliedDiscounts: undefined,
            misc: {
                image: item.imageUrls && item.imageUrls[0],
                price: val?.price
            }
        } as OrderItem

        addToCart(event,item,orderItem)
            
        setAlert(true)
    }

}


export default ProductDetailView;