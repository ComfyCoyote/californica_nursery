import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant, Seed } from '@/Interfaces/interfaces'
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/theme/theme';

interface ProductCardPropTypes {
    item: Plant | Seed;
    type: string;
}



const ProductCard: React.FC<ProductCardPropTypes> = ({ item , type}) => {

  return (
    <Link href={`/${type}/${item.id}`}>
    <VStack align="center" spacing={4}>
      <Box>
      <Box 
            bgColor={'yellow'}
            position={'relative'}
            height={'43vh'}
            width={'22vw'}
            overflow={'hidden'}
            >
      <Image 
        src={imageCheck(item)} 
        alt="Image" 
        fill={true} 
        style={{objectFit: "cover"}} 
        priority 
        sizes="(max-width: 600px) 50vw, (max-width: 1200px) 25vw, 25vw"/>
      </Box>
        <HStack bgColor={`${theme.palette.lime}`} p={2} w='100%' justify={"space-between"} alignItems={'center'}>
            <Text fontWeight={700}>{formatName(item)}</Text>
           <Text fontWeight={600}>{getPriceRange(item)}</Text> 
        </HStack>
      </Box>     
    </VStack>
    </Link>
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
      
      return name.replace(/\([^)]*\)/g, '').toUpperCase(); 

    } else {

       return ''
    }


  }

  
  function getPriceRange(item: PlaidProduct){

    const priceArr = item?.price ?? null

    if(priceArr){

      const startPrice = priceArr[0].price
      const endPrice = priceArr[priceArr.length - 1].price

      return `$${Number(startPrice)/100} - $${Number(endPrice)/100}`

    } else {

      return ''

    }

  }
};

export default ProductCard;
