// DropdownSelect.tsx
import React from 'react';
import Link from 'next/link';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
  Button,
  VStack,
  Box
} from '@chakra-ui/react';
import { theme } from '@/theme/theme';


//make the dropdown solid color, no white background
//sharp corner
//capitalize the word

interface NavbarDropdownProps {
  options: { value: string; label: string; bgColor: string, hoverColor: string, href: string }[];
  placeholder?: string;
  //onChange: (value: string) => void;
}

const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ options, placeholder }) => {
  
  return(
    <VStack>
      <Popover>
        <PopoverTrigger>
          <Button bgColor={'transparent'} color={'white'} fontSize={23} _hover={{bgColor: 'transparent'}}>
            <Text color={theme.palette.cream}>
                {placeholder?.toUpperCase()}
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent mt={7} borderRadius={0}>
          <PopoverBody p={0} borderRadius={0}>
            <VStack spacing={0}>
              {options.map((option) => (
                <Box width={'100%'} key={option.value} backgroundColor={option.bgColor}>
                <Link href={option.href}>
                <Button
                  width={'100%'}
                  key={option.value}
                  backgroundColor={option.bgColor}
                  _hover={{ backgroundColor: option.hoverColor, borderRadius: 0}}
                >
                  {option.label}
                </Button>
                </Link>
                </Box>
                
              ))}
            </VStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </VStack>
  );
};

export default NavbarDropdown;
