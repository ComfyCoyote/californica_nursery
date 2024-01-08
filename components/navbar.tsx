import {  Image, Flex, Button,  HStack , Avatar } from '@chakra-ui/react';
import React from "react";
import Link from 'next/link';
import ShoppingCart from './marketplace/shoppingCartContext/shoppingCart';

interface NavbarPropTypes {
  handleDrawerOpen: () => void
}

const Navbar: React.FC<NavbarPropTypes>=({handleDrawerOpen}) => {

  return (
      <Flex
        position={'fixed'}
        as='header'
        bg='olive'
        w="100%"
        px="1"
        py="4"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack as="nav" spacing="5">
            <Link 
              
              href='/marketplace'>
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="green.300" 
              color="black" 
              _hover={{ bg: 'green.700' }} 
              _active={{ bg: 'green.700' }}
              >
                PLANTS
              </Button>
            </Link>
            <Link 
              href='/marketplace'
              >
              <Button
              border="2px solid black" 
              borderRadius={0}
              bg="blue.300" 
              color="black" 
              _hover={{ bg: 'blue.700' }} 
              _active={{ bg: 'blue.700' }}
              >
                SEEDS
              </Button>
            </Link>
            <Link 
              href='/landscaping'
              >
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="orange.300" 
              color="black" 
              _hover={{ bg: 'orange.700' }} 
              _active={{ bg: 'orange.700' }}
              >
                LANDSCAPING
              </Button>
            </Link>
            <Link 
              href='/marketplace'
              >
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="purple.400" 
              color="black" 
              _hover={{ bg: 'purple.700' }} 
              _active={{ bg: 'purple.700' }}
              >
                MERCH
              </Button>
            </Link>
            <Link 
              href='/about'
              >
              <Button 
              border="2px solid black" 
              borderRadius={0}
              bg="yellow.200" 
              color="black" 
              _hover={{ bg: 'yellow.600' }} 
              _active={{ bg: 'yellow.700' }} 
              >
                ABOUT
              </Button>
            </Link>
        </HStack>
        <Button
          onClick={handleDrawerOpen}
          bg={'olive'}
          _hover={{ bg: 'olive' }}>
        <Image  
          h='100px'
          src={'/images/basket.PNG'} 
          alt={'/images/vercel.svg'} 
        />
        </Button>
      </Flex>
  );
}

export default Navbar