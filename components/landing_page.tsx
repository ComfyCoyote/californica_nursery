import React, { ReactNode, useState } from 'react';
import  { HiMenu } from 'react-icons/hi'
import { Box, Container, Flex, Image } from '@chakra-ui/react';


const LandingPage: React.FC = () => {

    const [hover, setHover] = useState(false)
    const [tipsHover, setTipsHover] = useState(false)

  return (
    <Box 
        minHeight="100vh" 
        background={`radial-gradient(ellipse at center, rgba(132, 141, 67, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)`}>
    <Flex direction={'row'} alignItems={"center"} justifyContent={"space-between"}>
        <HiMenu style={{height: '5%', width: '5%'}} />
        <Image src="/images/Wordmark.png" alt='/images/vercel.svg' width={'20%'} height={'10%'}/>
        <Image src="/images/basket.PNG" alt='/images/vercel.svg' boxSize="10%" />
    </Flex>
    <Flex direction="column" alignItems="center" justifyContent="center" minHeight="100%">
    <Container maxW="container.md" p={4}>
    <Flex justifyContent="space-between" width={'100%'} maxWidth={'100%'}>
        <Image 
            onMouseEnter={() => setTipsHover(true)} 
            onMouseLeave={() => setTipsHover(false)} 
            src={tipsHover ? "/animations/tidy tips.gif" : "/images/TT paper demo.png"} alt='/images/vercel.svg' boxSize="30%" />
        <Image 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            src={hover ? "/animations/hand drip.gif" : "/images/hand paper demo.PNG"} 
            alt='/images/vercel.svg' boxSize="40%" marginTop={'5%'}/>
        <Image src="/images/shovel.png" alt='/images/vercel.svg' boxSize="30%" />
    </Flex>
    <Flex justifyContent="space-between">
        <Image src="/images/shirt.PNG" alt='/images/vercel.svg' boxSize="30%" />
        <Image src="/images/person.PNG" alt='/images/vercel.svg' boxSize="30%" />
    </Flex>
    </Container>
    </Flex>
    </Box>
  );
};

export default LandingPage;
