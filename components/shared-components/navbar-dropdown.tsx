// DropdownSelect.tsx
import React from 'react';
import Link from 'next/link';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
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

  const handleOptionSelect = (option: object) => { console.log(option)}

  return (
    <VStack spacing={4}>
      <Popover>
        <PopoverTrigger>
          <Button bgColor={'transparent'} color={'white'} fontSize={23} _hover={{bgColor: 'transparent'}}>
            <Text color={theme.palette.cream}>
                {placeholder?.toUpperCase()}
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <VStack>
              {options.map((option) => (
                <Box width={'100%'} key={option.value}>
                <Link href={option.href}>
                <Button
                  width={'100%'}
                  key={option.value}
                  onClick={() => handleOptionSelect(option)}
                  backgroundColor={option.bgColor}
                  _hover={{ backgroundColor: option.hoverColor }}
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
