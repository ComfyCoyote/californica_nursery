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
    <Link 
      prefetch={true}
      href={`/${type}/${item.id}/${item.name}`}
    >
    <VStack align="center" spacing={0}>
      <Box 
            bgColor={getColor(type)}
            position={'relative'}
            height={theme.sizes.mktplc.mktImgW}
            width={theme.sizes.mktplc.mktImgH}
            overflow={'hidden'}
      >
      <Image 
        placeholder='blur'
        blurDataURL={imageCheck(item)}
        src={imageCheck(item)} 
        alt="Image" 
        fill 
        style={{objectFit: "cover"}}
        sizes="(max-width: 30em) 50vw,(max-width: 48em) 25vw,(max-width: 62em) 22vw,20vw"
        priority
        quality={60}
        loading='eager'
      />
      </Box>
        <HStack bgColor={getColor(type)} p={2} w={{base: '46vh', md: '22vw'}} justify={"space-between"} alignItems={'center'}>
            <Text fontWeight={theme.font.bold.full}>{formatName(item)}</Text>
           <Text fontWeight={theme.font.bold.semi}>{getPriceRange(item)}</Text> 
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
          
            return ''
        }
    } else {

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

      if(priceArr.length == 0){
        return 'Out of stock'
      }

      const startPrice = priceArr[0]?.price
      const endPrice = priceArr[priceArr.length - 1]?.price

      if(startPrice === endPrice){
        const amount = Number(startPrice)
        if(amount > 0){
          return `$${Number(startPrice)/100}`
        }
        
      } else if(startPrice !== endPrice){
        const amount = Number(startPrice)/100 - Number(endPrice)/100
        if(amount > 0){
          return `$${Number(endPrice)/100} - $${Number(startPrice)/100} `
        } 
        

      }

      

    } else {

      return ''

    }

  }
};

export default ProductCard;
