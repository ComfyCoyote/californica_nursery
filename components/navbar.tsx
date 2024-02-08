import {  Image, Flex, Box, HStack} from '@chakra-ui/react';
import React from "react";
import Link from 'next/link';
import NavbarDropdown from './shared-components/navbar-dropdown';
import { theme } from '@/theme/theme';
//navbar SHOP and EXPLORE buttons should collapse slide the searchable items



const Navbar: React.FC=() => {
  const shopOptions = [
    { value: 'option1', label: 'Plants', bgColor: 'green.300', hoverColor: 'green.700', href: '/plants'},
    { value: 'option2', label: 'Seeds', bgColor: 'blue.300', hoverColor: 'blue.700', href: '/seeds' },
    { value: 'option3', label: 'Merch', bgColor: 'purple.400', hoverColor: 'purple.700', href: '/merch' },
    // Add more options as needed
  ];

  const exploreOptions = [
    { value: 'option1', label: 'Landscaping', bgColor: 'orange.300', hoverColor: 'orange.700', href: '/landscaping' },
    { value: 'option2', label: 'About', bgColor: 'yellow.200', hoverColor: 'yellow.600', href: '/about' },
  ]

  return (
      <Flex
        position={'fixed'}
        as='header'
        bg={`${theme.palette.olive}`}
        w="100%"
        px="1"
        py="2"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack as="nav" spacing="5">
          <NavbarDropdown options={shopOptions} placeholder='Shop'/>
          <NavbarDropdown options={exploreOptions} placeholder='Explore'/>
        </HStack>
        <Box padding={5}>
        <Link href='/'>
        <Image  
          h='50px'
          src={'/images/CALIFORNICA WORDMARK cream.PNG'} 
          alt={'/images/vercel.svg'} 
        />
        </Link>
        </Box>
      </Flex>
  );
}

export default Navbar