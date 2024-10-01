import React from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant, Seed } from '@/Interfaces/interfaces'
import Image from 'next/image';
import Link from 'next/link';
import { theme } from '@/theme/theme';
import { start } from 'repl';

interface ProductCardPropTypes {
    item: Plant | Seed;
    type: string;
}



const ProductCard: React.FC<ProductCardPropTypes> = ({ item , type}) => {

  return (
    <Link href={`/${type}/${item.id}`}>
    <VStack align="center" spacing={0}>
      <Box 
            bgColor={getColor(type)}
            position={'relative'}
            height={{base: '60vh', md: '53vh'}}
            width={{base: '46vh', md: '22vw'}}
            overflow={'hidden'}
      >
      <Image 
        placeholder='blur'
        blurDataURL='images/icons/pink_star_placeholder.png'
        src={imageCheck(item)} 
        alt="Image" 
        fill 
        style={{objectFit: "cover"}}
        sizes="(max-width: 48em) 54vh, (max-width: 62em) 22vw, 20vw" 
        priority      
      />
      </Box>
        <HStack bgColor={getColor(type)} p={2} w={{base: '46vh', md: '22vw'}} justify={"space-between"} alignItems={'center'}>
            <Text fontWeight={700}>{formatName(item)}</Text>
           <Text fontWeight={600}>{getPriceRange(item)}</Text> 
        </HStack>    
    </VStack>
    </Link>
  );

  function imageCheck(item: PlaidProduct): string {
    if(item.imageUrls){
        if(typeof item.imageUrls[0] === 'string'){
          console.log(item.imageUrls[0])
            return item.imageUrls[0]
        } else {
          console.log(null)
            return ''
        }
    } else {

      console.log(null)
        return ''
    }
  

  }

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

      const startPrice = priceArr[0]?.price
      const endPrice = priceArr[priceArr.length - 1]?.price

      if(startPrice === endPrice){
        const amount = Number(startPrice)
        if(amount>0){
          return `$${Number(startPrice)/100}`
        } else {
          return 'Out of Stock'
        }
        
      } else if(startPrice !== endPrice){
        const amount = Number(startPrice)/100 - Number(endPrice)/100
        if(amount > 0){
          return `$${Number(startPrice)/100} - $${Number(endPrice)/100}`
        } else {
          return 'Out of Stock'
        }
        

      }

      

    } else {

      return ''

    }

  }
};

export default ProductCard;
