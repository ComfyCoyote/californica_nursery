// components/FloatingActionButton.tsx
import React from 'react';
import { Box, IconButton, useColorModeValue, Image } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';


interface SearchFloatingActionButtonPropTypes{
    toggleSearchDrawer: () => void
    
}


const SearchFloatingActionButton: React.FC<SearchFloatingActionButtonPropTypes> = ({toggleSearchDrawer}) => {
  const fabBgColor = useColorModeValue('teal.500', 'teal.300'); // Adjust colors based on your theme

  return (
    <Box
      position="fixed"
      bottom={4}
      right={30}
      left={1175}
      zIndex={999} // Adjust zIndex to ensure the FAB is above other content
    >
      <IconButton
        onClick={toggleSearchDrawer}
        aria-label="Add"
        icon={<Search2Icon />}
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

export default SearchFloatingActionButton;
