import React, { useEffect } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import { useState } from 'react';
import Link from 'next/link';
import { randomUUID } from 'crypto';

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
            h='100%'
            w='35%'>
        <Box 
            position={'relative'}
            height={'75vh'}
            width={'32vw'}
            overflow={'hidden'}
            >
            <Image 
                src={mainImage} 
                alt="Image"  
                fill={true}
                style={{objectFit: 'cover'}}
                priority
            />
        </Box>
        <HStack
            h='20%'>

        {
            item?.imageUrls && item?.imageUrls.map((img) => {
                if(img){
                    return(
                        <Box 
                            key={img}
                            position={'relative'}
                            height={'10vh'}
                            width={'5vw'}
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
