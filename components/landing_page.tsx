import React, { ReactNode, useState } from 'react';
import  { HiMenu } from 'react-icons/hi'
import { Box, Button, Container, Flex, VStack, HStack} from '@chakra-ui/react';
import Image from 'next/image'
import ShoppingCart from './marketplace/shoppingCartContext/shoppingCart';
import Link from 'next/link';

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
        background={`radial-gradient(ellipse at center, rgba(132, 141, 67, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)`}>
    <ShoppingCart open={shoppingCart} toggleCart={toggleCart}/>        
    <Flex direction={'row'} alignItems={"center"} justifyContent={"space-between"}>
        <HiMenu style={{height: '5%', width: '5%'}} />
        <Image 
            src="/images/CALIFORNICA WORDMARK cream.png" 
            alt='/images/vercel.svg' 
            width={200} height={70}/>
        <Image 
            onClick={toggleCart}
            style={{cursor: 'pointer' }} 
            src="/images/basket.PNG" 
            alt='/images/vercel.svg'  
            width={120} height={50} />
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
            src={"/animations/tidy tips transparent.gif"} 
            alt='/images/vercel.svg'  
            width={350} height={300} /> 
            </Link>
            : 
            <Link href={'/marketplace'}>
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/images/TT paper demo.png"} 
            alt='/images/vercel.svg'  
            width={350} height={300} />
            </Link>
        }
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
        </VStack>
        <VStack>
        <Link href={'/marketplace'}>
        <Image 
            onMouseEnter={() => setHover('hand')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'hand' ? "/animations/hand drip transparent.gif" : "/images/hand paper demo.png"} 
            alt='/images/vercel.svg' 
            width={300} height={300}  />
        </Link>
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
        </VStack>
        <VStack>
        <Link href={'/marketplace'}>
        <Image
            onMouseEnter={() => setHover('shovel')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }}  
            src={hover === 'shovel' ? "/animations/shovel transparent.gif" : "/images/shovel.png"} 
            alt='/images/vercel.svg' 
            width={350} height={350} />
        </Link>
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
        </VStack>
    </Flex>
    <Flex justifyContent="center" width={'100%'}>
        <VStack>
        <Link href={'/marketplace'}>
        <Image 
            onMouseEnter={() => setHover('shirt')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'shirt' ? "/animations/shirt transparent.gif" : "/images/shirt.png"} alt='/images/vercel.svg'  
            width={300} height={300}/>
        </Link>
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
        </VStack>
        <VStack>
        <Link href={'/marketplace'}>
        <Image 
            onMouseEnter={() => setHover('person')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'person' ? "/animations/person transparent.gif" : "/images/person.png"} 
            alt='/images/vercel.svg' width={300} height={300} />
        </Link>
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
        </VStack>
    </Flex>
    </Flex>
    </Box>
  );
};

export default LandingPage;
