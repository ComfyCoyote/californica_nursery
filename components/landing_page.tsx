import React, { ReactNode, useState } from 'react';
import  { HiMenu } from 'react-icons/hi'
import { Box, Container, Flex} from '@chakra-ui/react';
import Image from 'next/image'
import ShoppingCart from './marketplace/shoppingCartContext/shoppingCart';


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
        {hover === 'tips' ?
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/animations/tidy tips transparent.gif"} 
            alt='/images/vercel.svg'  
            width={350} height={300} /> 
            : 
            <Image 
            onMouseEnter={() => setHover('tips')} 
            onMouseLeave={() => setHover('')} 
            style={{cursor: 'pointer' }}
            src={"/images/TT paper demo.png"} 
            alt='/images/vercel.svg'  
            width={350} height={300} />
        }
        <Image 
            onMouseEnter={() => setHover('hand')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'hand' ? "/animations/hand drip transparent.gif" : "/images/hand paper demo.png"} 
            alt='/images/vercel.svg' 
            width={300} height={300}  />
        <Image
            onMouseEnter={() => setHover('shovel')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }}  
            src={hover === 'shovel' ? "/animations/shovel transparent.gif" : "/images/shovel.png"} 
            alt='/images/vercel.svg' 
            width={350} height={350} />
    </Flex>
    <Flex justifyContent="center" width={'100%'}>
        <Image 
            onMouseEnter={() => setHover('shirt')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'shirt' ? "/animations/shirt transparent.gif" : "/images/shirt.png"} alt='/images/vercel.svg'  
            width={300} height={300}/>
        <Image 
            onMouseEnter={() => setHover('person')} 
            onMouseLeave={() => setHover('')}
            style={{cursor: 'pointer' }} 
            src={hover === 'person' ? "/animations/person transparent.gif" : "/images/person.png"} 
            alt='/images/vercel.svg' width={300} height={300} />
    </Flex>
    </Flex>
    </Box>
  );
};

export default LandingPage;
