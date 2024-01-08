import React from 'react';
import { Box, HStack, Image, Text, VStack, Button } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import Navbar from '@/components/navbar';
import { useCart } from '../shoppingCartContext/shoppingCartContext';
import { useState } from 'react';
import { string } from 'square/dist/types/schema';
import ProductDetailInfo from './product-detail-info';
import ProductDetailImages from './product-detail-images';
import ProductDetailPrices from './product-detail-prices';


interface ProductCardPropTypes {
    item: PlaidProduct
}

const image = 'https://items-images-production.s3.us-west-2.amazonaws.com/files/b8cbe24e82bb4b9aad5b8f35485ddca30541986a/original.jpeg'

const ProductDetailView: React.FC<ProductCardPropTypes> = ({item}) => {

    console.log(imageCheck(item))
    console.log(item)
    const { addToCart } = useCart()

    const [isDrawerOpen, setIsDrawerOpen] = useState(true);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return(
        <Box
            bg='navajowhite' 
            p={20}  
            h={'100%'} 
            w={'100%'}>
        <HStack 
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
                <ProductDetailPrices item={item} />
                <Button
                    onClick={(event) => addToCart(event, item)}
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

    function imageCheck(item: PlaidProduct): string {
        if(item.imageUrls){
            if(typeof item.imageUrls[0] === 'string'){
                return item.imageUrls[0]
            } else {
                return ''
            }
        } else {
    
            return ''
        }

        
      
    
    }

    
}

export default ProductDetailView;