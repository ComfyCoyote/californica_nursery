import {Flex, Box, Button, IconButton, HStack, Text} from '@chakra-ui/react';
import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import NavbarDropdown from '../shared-components/navbar-dropdown';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../marketplace/search-sidebar/search-sidebar-context';
import { useRouter } from 'next/router';
import { theme } from '@/theme/theme';


interface NavbarProps {
  toggleShoppingCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({toggleShoppingCart}) => {

  const { pathname, query } = useRouter()

  const shopOptions = [
    { value: 'option1', label: 'PLANTS', bgColor: theme.palette.lime, hoverColor: 'green.700', href: '/plants'},
    { value: 'option2', label: 'SEEDS', bgColor: theme.palette.skyBlue, hoverColor: 'blue.700', href: '/seeds' },
    { value: 'option3', label: 'MERCH', bgColor: theme.palette.pink, hoverColor: 'purple.700', href: '/merch' },
    // Add more options as needed
  ];

  const exploreOptions = [
    { value: 'option1', label: 'LANDSCAPING', bgColor: 'orange.300', hoverColor: 'orange.700', href: '/landscaping' },
    { value: 'option2', label: 'ABOUT', bgColor: 'yellow.200', hoverColor: 'yellow.600', href: '/about' },
  ]

  const { toggleOpen } = useSearch()

  return (
    <Flex
    position="fixed"
    as="header"
    bg={`${theme.palette.darkGreen}`}
    zIndex={1000}
    w="100%"
    px="1"
    py="2"
    alignItems="center"
    justifyContent="space-between"
    direction={{ base: 'column', md: 'row' }}
  >
    <Box 
    padding={5} 
    textAlign={{ base: 'center', md: 'left' }}>
      <Link href="/">
        <Image
          height={50}
          width={200} 
          src={'/images/titles/nav_bar.png'}
          alt={'Californica Nursery Logo'}
        />
      </Link>
    </Box>
  
    <HStack
      as="nav"
      spacing={{ base: 0, md: 5 }} 
      direction={{ base: 'column', md: 'row' }}
      w={{ base: '100%', md: 'auto' }} 
      justifyContent={{ base: 'center', md: 'space-evenly' }}
    >
      <NavbarDropdown options={shopOptions} placeholder="Shop" />
      <NavbarDropdown options={exploreOptions} placeholder="Explore" />
      <Link href={'/contact'}>
      <Button
              bgColor={'transparent'}
              color={'white'}
              fontSize={23}
              _hover={{ bgColor: 'transparent' }}
            >
              <Text color="cream">{'CONTACT'}</Text>
        </Button>
        </Link>
        <Box textAlign="center">
          <IconButton
            aria-label="Add"
            onClick={toggleShoppingCart}
            icon={
              <Image
                src="/images/icons/basket_lime.png"
                alt="Shopping Cart"
                fill
              />
            }
            height={{ base: 50, md: 70 }} 
            width={{ base: 50, md: 70 }} 
            borderRadius="full"
            size="lg"
            color="white"
            bgColor={theme.palette.darkBrown}
            _hover={{ bgColor: 'transparent' }}
          />
        </Box>
        <Box textAlign="center" mt={{ base: 2, md: 0 }}> 
          {getLocation(pathname, query) && (
            <IconButton
              onClick={toggleOpen}
              bgColor={theme.palette.darkGreen}
              aria-label="search"
              icon={<FaSearch color={theme.palette.lime} style={{fontSize: '30px'}}/>}
              height={{ base: 50, md: 70 }} 
              width={{ base: 50, md: 70 }} 
              _hover={{ bgColor: 'transparent' }}
            />
          )}
        </Box>
    </HStack>
  </Flex>
  );


  function getLocation(pathname: string, query: any){
    
    const prod = query.pid
    
    if(pathname && !prod){
    
      const allowed = ['plants', 'merch', 'seeds']

      let status = false

      allowed.forEach((i) => {
        if(pathname.includes(i)){
          status = true
        }
      })

      return status


    }
    
  }
}

export default Navbar