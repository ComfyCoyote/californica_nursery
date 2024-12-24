import Image from 'next/image';
import React from "react";
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '../marketplace/search-sidebar/search-sidebar-context';
import { useRouter } from 'next/router';
import { theme } from '@/theme/theme';
import {
    Box,
    Flex, 
    IconButton, 
    HStack 
  } from '@chakra-ui/react';
import NavDropdown from './nav-dropdown-mobile';

interface NavbarProps {
  toggleShoppingCart: () => void;
}

const NavbarMobile: React.FC<NavbarProps> = ({toggleShoppingCart}: NavbarProps) => {

    const { pathname, query } = useRouter()
    const { toggleOpen } = useSearch()

    return(
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
            direction={'column'} // Responsive direction
        >
            <Box 
                padding={5} 
                textAlign={'center'}
            > {/* Center logo on mobile */}
                <Link href="/">
                <Image
                    height={50}
                    width={200} 
                    src={'/images/titles/nav_bar.png'}
                    alt={'/images/vercel.svg'}
                    />
                </Link>
            </Box>
            <HStack
                as="nav"
                width={'100%'}
                justifyContent={'space-between'}
            >
               <NavDropdown />
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
                    height={50}
                    width={50} 
                    borderRadius="full"
                    size="lg"
                    color="white"
                    bgColor={theme.palette.darkBrown}
                    _hover={{ bgColor: 'transparent' }}
                />
                </Box>
                {getLocation(pathname, query) && (
                    <Box textAlign="center" mt={{ base: 2, md: 0 }}> 
                        <IconButton
                        onClick={toggleOpen}
                        bgColor={theme.palette.darkGreen}
                        aria-label="search"
                        icon={<FaSearch color={theme.palette.lime} style={{fontSize: '30px'}}/>}
                        height={50} 
                        width={50} 
                        _hover={{ bgColor: 'transparent' }}
                        />
                     </Box>
                )}
            </HStack>   
        </Flex>
    )


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


export default NavbarMobile