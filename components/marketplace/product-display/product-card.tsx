import React from 'react';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import Link from 'next/link';

interface ProductCardPropTypes {
    item: PlaidProduct
}



const ProductCard: React.FC<ProductCardPropTypes> = ({ item }) => {

  return (
    <VStack align="center" spacing={4}>
      <Box>
      <Link
            href={{
              pathname: '/marketplace/[product]',
              query: { product: item.id },
            }}
          >
      <Image src={imageCheck(item)} alt="Image" h="400px" w="350px" objectFit="cover" />
        <HStack p={2} w='100%' justify={"space-between"} alignItems={'center'}>
            <Text fontWeight={600}>{formatName(item)}</Text>
           <Text fontWeight={600}>{getPriceRange(item)}</Text> 
        </HStack>
      </Link>
      </Box>     
    </VStack>
  );

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

  function formatName(item: Plant | Apparel | PlaidProduct): string {
    
    const name = item?.name

    if(name){
      
      return name.replace(/\([^)]*\)/g, ''); 

    } else {

       return ''
    }


  }

  
  function getPriceRange(item: PlaidProduct){

    const priceArr = item?.price ?? null
    console.log(priceArr)
    if(priceArr){

      const startPrice = priceArr[0].price
      const endPrice = priceArr[priceArr.length - 1].price

      console.log(`${startPrice} - ${endPrice}`)

      return `$${Number(startPrice)/100} - $${Number(endPrice)/100}`

    } else {

      return ''

    }

  }
};

export default ProductCard;
