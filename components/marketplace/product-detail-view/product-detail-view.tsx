import React from 'react';
import { Box, HStack, Image, Text, VStack, Button } from '@chakra-ui/react';
import { Apparel, OrderItem, PlaidProduct, Plant, Merch, Seed, PriceVariation } from '@/Interfaces/interfaces'
import { useCart } from '../shoppingCartContext/shoppingCartContext';
import { useState } from 'react';
import ProductDetailInfo from './product-detail-info';
import ProductDetailImages from './product-detail-images';
import ProductDetailPrices from './product-detail-prices';
import CustomAlert from '@/components/alert';
import { OrderLineItemAppliedTax } from 'square';
// a user should first select a plant size and then select add to cart to add to cart,
// add to cart is disabled unless the select a size

const success = 'Added item to cart!'
const fail = 'Unable to add item to cart!'


interface ProductCardPropTypes {
    item: Plant | Merch | Seed
}

export interface Variation {
    name: string,
    id: string
}


const ProductDetailView: React.FC<ProductCardPropTypes> = ({item}) => {

    const { addToCart } = useCart()

    const [priceVariation, setPriceVariation] = useState<Variation>()
    const [alert, setAlert] = useState(false)


    const selectPrice = (event: React.MouseEvent<HTMLButtonElement>, option: PriceVariation ) => {

        setPriceVariation({id: option.id, name: option.type} as Variation)
    }

    return(
        <Box
            bg='navajowhite'
            p={30}  
            h={'100%'} 
            w={'100%'}>
        <HStack 
            mt={20}
            p={50}
            h='100%'
            w='100%'
            spacing={10}>
                <ProductDetailImages item={item}/>
                <VStack
                    w='50%'
                    h='100%'
                    display={'flex'}
                    alignItems={'flex-start'}>
                <ProductDetailInfo item={item}/>
                {
                    item.price && <ProductDetailPrices prices={item.price} selectPrice={selectPrice} priceVariation={priceVariation}/>
                }
                <CustomAlert display={alert} status={'success'} message={success} toggleFunction={() => { setAlert(!alert)}}/>
                <Button
                    isDisabled={!priceVariation}
                    onClick={(event) => handleAddToCartClick(event)}
                    bg={'green.200'}
                    borderRadius={0}
                    borderWidth={1}
                    borderColor={'black'}>
                    <Box>
                        add to cart!
                    </Box>
                </Button>
                </VStack>
        </HStack>
        </Box>
    )


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