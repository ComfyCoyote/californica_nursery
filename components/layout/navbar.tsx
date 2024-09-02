import {Flex, Box, IconButton, HStack, useBreakpointValue} from '@chakra-ui/react';
import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import NavbarDropdown from '../shared-components/navbar-dropdown';
import { Search2Icon } from '@chakra-ui/icons';
import { useSearch } from '../marketplace/search-sidebar/search-sidebar-context';
import { useRouter } from 'next/router';
import { theme } from '@/theme/theme';
//navbar SHOP and EXPLORE buttons should collapse slide the searchable items

interface NavbarProps {
  toggleShoppingCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({toggleShoppingCart}) => {
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
    direction={{ base: 'column', md: 'row' }} // Responsive direction
  >
    <Box padding={5} textAlign={{ base: 'center', md: 'left' }}> {/* Center logo on mobile */}
      <Link href="/">
        <Image
          height={useBreakpointValue({ base: 40, md: 50 })} // Responsive height
          width={useBreakpointValue({ base: 150, md: 200 })} // Responsive width
          src={'/images/titles/nav_bar.png'}
          alt={'/images/vercel.svg'}
        />
      </Link>
    </Box>
  
    <HStack
      as="nav"
      spacing={{ base: 2, md: 5 }} // Adjust spacing for mobile
      direction={{ base: 'column', md: 'row' }} // Stack vertically on mobile
      w={{ base: '100%', md: 'auto' }} // Full width on mobile
      justifyContent={{ base: 'center', md: 'space-evenly' }} // Center items on mobile
    >
      <NavbarDropdown options={shopOptions} placeholder="Shop" />
      <NavbarDropdown options={exploreOptions} placeholder="Explore" />
        <Box textAlign="center">
          <IconButton
            aria-label="Add"
            onClick={toggleShoppingCart}
            icon={
              <Image
                src="/images/icons/basket_lime.png"
                alt="Your Image Alt Text"
                fill
                objectFit="cover"
              />
            }
            height={useBreakpointValue({ base: 50, md: 70 })} // Responsive size
            width={useBreakpointValue({ base: 50, md: 70 })} // Responsive size
            borderRadius="full"
            size="lg"
            color="white"
            bgColor={theme.palette.darkBrown}
            _hover={{ bgColor: 'transparent' }}
          />
        </Box>
        <Box textAlign="center" mt={{ base: 2, md: 0 }}> {/* Add margin-top on mobile */}
          {getLocation() && (
            <IconButton
              onClick={toggleOpen}
              bgColor={theme.palette.darkGreen}
              aria-label="search"
              icon={<Search2Icon boxSize={useBreakpointValue({ base: 5, md: 7 })} color={theme.palette.lime} />}
              height={useBreakpointValue({ base: 50, md: 70 })} // Responsive size
              width={useBreakpointValue({ base: 50, md: 70 })} // Responsive size
              _hover={{ bgColor: 'transparent' }}
            />
          )}
        </Box>
    </HStack>
  </Flex>
  );


  function getLocation(){
    const { pathname, query } = useRouter()
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