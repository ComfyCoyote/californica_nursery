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

    const [mainImage, setMainImage] = useState('')

    useEffect(() => {

        const image = imageCheck(item)

        if(image){
            setMainImage(image)

        }

    }, [])


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
                src={mainImage} 
                alt="Image"  
                fill={true}
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
            item?.imageUrls && item?.imageUrls.map((img) => {
                if(img){
                    return(
                        <Box 
                            key={img}
                            position={'relative'}
                            height={{base: '10vh', md: '10vh'}}
                            width={{base: '15vw', md: '5vw'}}
                            overflow={'hidden'}
                            cursor={'pointer'}
                            onClick={() => {setMainImage(img)}}
                        >
                            <Image 
                            key={img}
                            src={img} 
                            alt="Image" 
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

  function imageCheck(item : PlaidProduct){

    const itemImg = item?.imageUrls

    if(itemImg){
        if(itemImg[0]){
            return(
                itemImg[0]
            )

        }
        
    } else {

        return image
    }


  }

  
};

export default ProductDetailImages;
