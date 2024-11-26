import React, { useState } from 'react';
import { Box, Flex} from '@chakra-ui/react';
import Image from 'next/image'
import { theme } from '@/theme/theme';
import Footer from '../layout/footer';
import ShoppingCart from "../marketplace/shoppingCartContext/shoppingCart";
import LinkIcon from './link-icon';

const pages = [
    {
        "name": "plants",
        "color": theme.palette.lime
    },
    {
        "name": "seeds",
        "color": theme.palette.skyBlue
    },
    {
        "name": "merch",
        "color": theme.palette.purple
    },
    {
        "name": "landscaping",
        "color": theme.palette.orange
    },
    {
        "name": "about",
        "color": theme.palette.lightYellow
    }
]


const AltLandingPage: React.FC = () => {
    
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)


    const toggleShoppingCart = () => {
        setShoppingCartOpen(!shoppingCartOpen)
    }

  return (
    <React.Fragment>
    <ShoppingCart 
        open={shoppingCartOpen}
        toggleCart={toggleShoppingCart}
    />
    <Box 
        minHeight="100vh" 
        background={`${theme.palette.olive}`}
    >
    <Flex 
        backgroundColor={theme.palette.darkGreen} 
        direction={'row'} 
        alignItems={"center"} 
        justifyContent={"center"}
    >
        <Box
            p={5}>
            <Image 
                src="/images/titles/wordmark_web.png" 
                alt='/images/vercel.svg' 
                width={600} height={100}/>
        </Box>
        <Box
            position={"absolute"}
            right={{base: 400, md: 10}}>
            <Image
                onClick={toggleShoppingCart}
                src="/images/icons/basket_lime.png" 
                alt='/images/vercel.svg' 
                width={100} height={100} />
        </Box>
    </Flex>
    <Flex 
        direction="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="100%" 
        p={20}
    >
    <Flex
        direction={{base: 'column', md: 'row'}} 
        justifyContent="center" 
        width={'100%'} 
        maxWidth={'100%'}
    >
        {
            pages.slice(0, 3).map((l) => {
                return(
                    <LinkIcon key={l.name} iconName={l.name} color={l.color} />
                )
            })
        }
    </Flex>
    <Flex 
        direction={{base: 'column', md: 'row'}} 
        justifyContent="center" 
        width={'100%'}>
       {
            pages.slice(3, 5).map((l) => {
                return(
                    <LinkIcon key={l.name} iconName={l.name} color={l.color} />
                )
            })
        }
    </Flex>
    </Flex>
    </Box>
    <Footer />
    </React.Fragment>
  );
};

export default AltLandingPage;
