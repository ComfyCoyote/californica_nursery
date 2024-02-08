// components/ElegantHexagonContainer.tsx

import React from 'react';
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';


const imageList = [
    {src:'/images/landscaping/IMG_0092.png', alt: 'alternate text'},
    {src:'/images/landscaping/IMG_0960.png', alt: 'alternate text'},
    {src:'/images/landscaping/IMG_1012.png', alt: 'alternate text'},
    
]

const ElegantHexagonContainer: React.FC = () => {
  return (
    <Box p={4}>
        <Image
            src={imageList[0].src}
            alt={imageList[0].alt}
            boxSize={600}
            position={'relative'}
            left={200}
            top={250}
            objectFit="cover"
            clipPath='polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)'
        />
        <Image
            src={imageList[1].src}
            alt={imageList[1].alt}
            position={'relative'}
            left={360}
            top={220}
            boxSize={400}
            objectFit="cover"
            clipPath='polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)'
        />
        <Image
            position={'relative'}
            left={10}
            src={imageList[2].src}
            alt={imageList[2].alt}
            boxSize={400}
            objectFit="cover"
            clipPath='polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)'
        />
        <Image
            position={'relative'}
            bottom={750}
            left={10}
            src='/images/Logo_with_background.png'
            alt='alternate text'
            boxSize={400}
            objectFit={'cover'}
            borderRadius={'full'}

        />
    </Box>
  );
};

export default ElegantHexagonContainer;
