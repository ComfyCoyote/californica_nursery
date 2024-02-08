// components/FloatingActionButton.tsx
import React from 'react';
import { Box, IconButton, useColorModeValue, Image } from '@chakra-ui/react';


interface FloatingActionButtonPropTypes{
    toggleShoppingCart: () => void
    
}


const FloatingActionButton: React.FC<FloatingActionButtonPropTypes> = ({toggleShoppingCart}) => {
  const fabBgColor = useColorModeValue('teal.500', 'teal.300'); // Adjust colors based on your theme

  return (
    <Box
      position="fixed"
      bottom={4}
      right={4}
      zIndex={999} // Adjust zIndex to ensure the FAB is above other content
    >
      <IconButton
        onClick={toggleShoppingCart}
        aria-label="Add"
        icon={  <Image
            src="/images/basket.PNG"
            alt="Your Image Alt Text"
            boxSize="100px" // Set the desired size for your image
            objectFit="cover"
            borderRadius="full"
          />}
        height={100}
        width={100}
        borderRadius={'full'}
        size="lg"
        color="white"
        bgColor={fabBgColor}
        _hover={{ bgColor: 'teal.600' }}
      />
    </Box>
  );
};

export default FloatingActionButton;
