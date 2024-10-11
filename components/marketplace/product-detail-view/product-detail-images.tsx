import React, { useEffect } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { PlaidProduct } from '@/Interfaces/interfaces'
import { useState } from 'react';


interface ProductDetailInfoPropTypes {
    item: PlaidProduct
}

const image = 'https://items-images-production.s3.us-west-2.amazonaws.com/files/b8cbe24e82bb4b9aad5b8f35485ddca30541986a/original.jpeg'


const ProductDetailImages: React.FC<ProductDetailInfoPropTypes> = ({ item }) => {

    const [mainImage, setMainImage] = useState(0)


  return(
        <VStack
            display={'flex'}
            alignItems={'flex-start'}
            h='100%'
            w={{base: '100%', md: '35%'}}>
        <Box 
            position={'relative'}
            height={{base: '75vh', md: '75vh'}}
            width={{base: '40vh', md: '32vw'}}
            overflow={'hidden'}
            >
            <Image 
                placeholder='blur'
                blurDataURL='images/icons/pink_star_placeholder.png'
                // [mainImage] ? item?.imageUrls?.[mainImage] : ''
                // [0] ? item?.imageUrls?.[0] : ''
                src={getImageSrc()} 
                alt="Image"  
                fill={true}
                sizes = "(max-width: 768px) 40vh, 32vw"
                style={{objectFit: 'cover'}}
                priority
            />
        </Box>
        <HStack
            w={'100%'}
            display={'flex'}
            alignItems={'flex-start'}
            h='20%'>

        {
            item?.imageUrls && item?.imageUrls.map((img, index) => {
                if(img){
                    return(
                        <Box 
                            key={img}
                            position={'relative'}
                            height={{base: '10vh', md: '10vh'}}
                            width={{base: '15vw', md: '5vw'}}
                            overflow={'hidden'}
                            cursor={'pointer'}
                            onClick={() => {selectImage(index); console.log('set main image')}}
                        >
                            <Image 
                            key={img}
                            src={img} 
                            alt="Image"
                            sizes="(max-width: 768px) 15vw, 5vw" 
                            fill={true}
                            style={{objectFit: 'cover'}}
                            priority
                        />
                    </Box>
                    )


                }
                
                
            })

        }
        </HStack>
        </VStack>
    
  );

  function selectImage(index: number){
    setMainImage(index)
  }

  function getImageSrc(): string{
    let image = ''
    if(mainImage ===  0){
        if(item?.imageUrls?.[0]){
            image =item?.imageUrls?.[0]
        }
    } else if(mainImage > 0){
        if(item?.imageUrls?.[mainImage]){
            image = item?.imageUrls?.[mainImage] 
        }
    } 

    return image

  }


  
};

export default ProductDetailImages;
