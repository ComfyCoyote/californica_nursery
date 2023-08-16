import {  Image, Flex, Button,  HStack , Link, Avatar } from '@chakra-ui/react';
import  { HiOutlineShoppingBag } from 'react-icons/hi'
import { motion } from 'framer-motion';

import React from "react";

const CTA = "Get Started"


export default function Navbar() : React.JSX.Element {

  return (
      <Flex
        as='header'
        bg='tomato'
        w="100%"
        px="1"
        py="4"
        alignItems="center"
        justifyContent="space-between"
      >
        <HStack as="nav" spacing="5">
            <Link >
              <Button variant="nav">Shopping</Button>
            </Link>
            <Link >
              <Button variant="nav">Join Us</Button>
            </Link>
        
            <Link >
              <Button variant="nav">About</Button>
            </Link>
            <Link >
              <Button variant="nav">Contact Us</Button>
            </Link>
        </HStack>
        <Image style={{marginRight: '27%' }} src={'/images/Logo_with_background.png'} h="60px" />
        <HStack>
          <Link style={{paddingRight: '10px'}}>
            <HiOutlineShoppingBag style={{height: '30px', width: '30px'}}/>
          </Link>
        </HStack>
      </Flex>
  );
}