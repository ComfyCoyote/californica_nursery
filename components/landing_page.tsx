import React, { ReactNode, useState } from 'react';
import  { HiMenu } from 'react-icons/hi'
import { Box, Button, Container, Flex, VStack, HStack} from '@chakra-ui/react';
import Image from 'next/image'
import ShoppingCart from './marketplace/shoppingCartContext/shoppingCart';
import Link from 'next/link';
import { theme } from '@/theme/theme';

// add text under each link

const LandingPage: React.FC = () => {

    const [hover, setHover] = useState('')
    const [shoppingCart, setShoppingCart] = useState(false)

    const toggleCart = () => {
        setShoppingCart(!shoppingCart)
    }

  return (
    <Box 
        minHeight="100vh" 
        background={`${theme.palette.olive}`}>
    <ShoppingCart open={shoppingCart} toggleCart={toggleCart}/>        
    <Flex direction={'row'} alignItems={"center"} justifyContent={"center"}>
        <Box
            p={5}>
        <Image 
            src="/images/Californica Nursery Website Capitalized - cream-05.png" 
            alt='/images/vercel.svg' 
            width={600} height={100}/>
        </Box>
    </Flex>
    <Flex direction="column" alignItems="center" justifyContent="center" minHeight="100%">
    <Flex justifyContent="center" width={'100%'} maxWidth={'100%'}>
        <VStack>
        {hover === 'tips' ?
            <Link href={'/marketplace'}>
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/images/home_images/plants ani.PNG"} 
            alt='/images/vercel.svg'  
            width={350} height={300} /> 
            </Link>
            : 
            <Link href={'/marketplace'}>
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/images/home_images/plants.PNG"} 
            alt='/images/vercel.svg'  
            width={350} height={300} />
            </Link>
        }
        <Button 
              as="a"
              border="2px solid black" 
              borderRadius={0}
              bg="green.300" 
              color="black" 
              _hover={{ bg: 'green.700' }} 
              _active={{ bg: 'green.700' }}
              >
                PLANTS
        </Button>
        </VStack>
        <VStack>
        <Link href={'/seeds'}>
        <Image 
            onMouseEnter={() => setHover('hand')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'hand' ? "/images/home_images/seeds ani.PNG" : "/images/home_images/seeds.PNG"} 
            alt='/images/vercel.svg' 
            width={300} height={300}  />
        </Link>
        <Button
              as="a"
              border="2px solid black" 
              borderRadius={0}
              bg="blue.300" 
              color="black" 
              _hover={{ bg: 'blue.700' }} 
              _active={{ bg: 'blue.700' }}
              >
                SEEDS
        </Button>
        </VStack>
        <VStack>
        <Link href={'/landscaping'}>
        <Image
            onMouseEnter={() => setHover('shovel')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }}  
            src={hover === 'shovel' ? "/images/home_images/landscaping ani.PNG" : "/images/home_images/landscaping.PNG"} 
            alt='/images/vercel.svg' 
            width={350} height={350} />
        </Link>
        <Link href={'/landscaping'}>
        <Button 
        as="a"
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
        </VStack>
    </Flex>
    <Flex justifyContent="center" width={'100%'}>
        <VStack>
        <Link href={'/merch'}>
        <Image 
            onMouseEnter={() => setHover('shirt')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'shirt' ? "/images/home_images/merch ani.PNG" : "/images/home_images/merch.PNG"} alt='/images/vercel.svg'  
            width={300} height={300}/>
        </Link>
        <Link href={'/merch'}>
        <Button 
              as="a"
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
        </VStack>
        <VStack>
        <Link href={'/about'}>
        <Image 
            onMouseEnter={() => setHover('person')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'person' ? "/images/home_images/about ani.PNG" : "/images/home_images/about.PNG"} 
            alt='/images/vercel.svg' width={300} height={300} />
        </Link>
        <Link href={'/about'}>
        <Button 
        as="a"
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
        </VStack>
    </Flex>
    </Flex>
    <Flex justifyContent={'flex-end'}>
        <Box>
            <Image
               src="/images/basket_cream.png" 
               alt='/images/vercel.svg' 
               width={120} height={120} />
        </Box>
    </Flex>
    </Box>
  );
};

export default LandingPage;
