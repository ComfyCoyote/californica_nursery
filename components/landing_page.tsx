import React, { ReactNode, useState } from 'react';
import  { HiMenu } from 'react-icons/hi'
import { Box, Button, Container, Flex, VStack, HStack} from '@chakra-ui/react';
import Image from 'next/image'
import ShoppingCart from './marketplace/shoppingCartContext/shoppingCart';
import Link from 'next/link';
import { theme } from '@/theme/theme';
import Footer from './layout/footer';

// add text under each link

/// for mobile devices, stack the link icons vertically

// for mobile devices, marketplace pages should be 2 columns

//line up the button text, reduce the image sizes


const LandingPage: React.FC = () => {

    const [hover, setHover] = useState('')
    const [shoppingCart, setShoppingCart] = useState(false)

    const toggleCart = () => {
        setShoppingCart(!shoppingCart)
    }

  return (
    <React.Fragment>
    <Box 
        minHeight="100vh" 
        background={`${theme.palette.olive}`}
    >
    <ShoppingCart open={shoppingCart} toggleCart={toggleCart}/>     
    <Flex backgroundColor={theme.palette.darkGreen} direction={'row'} alignItems={"center"} justifyContent={"center"}>
        <Box
            p={5}>
            <Image 
                src="/images/titles/wordmark_web.png" 
                alt='/images/vercel.svg' 
                width={600} height={100}/>
        </Box>
        <Box 
            position={"absolute"}
            right={10}>
            <Image
                src="/images/icons/basket_lime.png" 
                alt='/images/vercel.svg' 
                width={100} height={100} />
        </Box>
    </Flex>
    <Flex direction="column" alignItems="center" justifyContent="center" minHeight="100%" p={20}>
    <Flex justifyContent="center" width={'100%'} maxWidth={'100%'}>
        <VStack>
        {hover === 'tips' ?
            <Link href={'/plants'}>
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/images/home_images/plants ani.PNG"} 
            alt='/images/vercel.svg'  
            width={350} height={300} /> 
            </Link>
            : 
            <Link href={'/plants'}>
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/images/home_images/plants.PNG"} 
            alt='/images/vercel.svg'  
            width={350} height={300} />
            </Link>
        }
        <Link href={'/plants'} />
        <Button 
              as="a"
              border="2px solid black" 
              borderRadius={0}
              bg={theme.palette.lime} 
              color="black" 
              _hover={{ bg: theme.palette.lime }} 
              _active={{ bg: theme.palette.lime }}
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
        <Link href={'/seeds'} />
        <Button
              as="a"
              border="2px solid black" 
              borderRadius={0}
              bg={theme.palette.skyBlue} 
              color="black" 
              _hover={{ bg: theme.palette.skyBlue }} 
              _active={{ bg: theme.palette.skyBlue }}
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
              bg={theme.palette.purple} 
              color="black" 
              _hover={{ bg: theme.palette.purple }} 
              _active={{ bg: theme.palette.purple }}
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
        bg={theme.palette.lightYellow} 
        color="black" 
        _hover={{ bg: theme.palette.lightYellow }} 
        _active={{ bg: theme.palette.lightYellow }} 
        >
        ABOUT
        </Button>
        </Link>
        </VStack>
    </Flex>
    </Flex>
    </Box>
    <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
