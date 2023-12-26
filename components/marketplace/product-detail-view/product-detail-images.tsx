import React from 'react';
import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import Link from 'next/link';
import { randomUUID } from 'crypto';

interface ProductDetailInfoPropTypes {
    item: PlaidProduct
}

const image = 'https://items-images-production.s3.us-west-2.amazonaws.com/files/b8cbe24e82bb4b9aad5b8f35485ddca30541986a/original.jpeg'


const ProductDetailImages: React.FC<ProductDetailInfoPropTypes> = ({ item }) => {


  return(
        <VStack
            h='100%'
            w='35%'>
        <Image 
            src={imageCheck(item)} 
            alt="Image" 
            h="600px" 
            w="500px" 
            objectFit="cover"
        />
        <HStack
            h='20%'>

        {
            item?.imageUrls && item?.imageUrls.map((img) => {
                if(img){
                    return(
                        <Image 
                        key={img}
                        src={img} 
                        alt="Image" 
                        h="60px" 
                        w="50px" 
                        objectFit="cover"
                    />
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
