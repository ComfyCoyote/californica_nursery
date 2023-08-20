import React, { ReactNode, useState } from 'react';
import  { HiMenu } from 'react-icons/hi'
import { Box, Container, Flex} from '@chakra-ui/react';
import Image from 'next/image'


const LandingPage: React.FC = () => {

    const [hover, setHover] = useState(false)
    const [tipsHover, setTipsHover] = useState(false)

  return (
    <Box 
        minHeight="100vh" 
        background={`radial-gradient(ellipse at center, rgba(132, 141, 67, 0.9) 0%, rgba(0, 0, 0, 0.7) 100%)`}>
    <Flex direction={'row'} alignItems={"center"} justifyContent={"space-between"}>
        <HiMenu style={{height: '5%', width: '5%'}} />
        <Image src="/images/Wordmark.png" alt='/images/vercel.svg' width={200} height={70}/>
        <Image src="/images/basket.PNG" alt='/images/vercel.svg'  width={120} height={50} />
    </Flex>
    <Flex direction="column" alignItems="center" justifyContent="center" minHeight="100%">
    <Flex justifyContent="center" width={'100%'} maxWidth={'100%'}>
        <Image 
            onMouseEnter={() => setTipsHover(true)} 
            onMouseLeave={() => setTipsHover(false)} 
            src={tipsHover ? "/animations/tidy tips.gif" : "/images/TT paper demo.png"} alt='/images/vercel.svg'  width={350} height={300} />
        <Image 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            src={hover ? "/animations/hand drip.gif" : "/images/hand paper demo.PNG"} 
            alt='/images/vercel.svg' width={300} height={300}  />
        <Image src="/images/shovel.png" alt='/images/vercel.svg' width={350} height={350} />
    </Flex>
    <Flex justifyContent="center" width={'100%'}>
        <Image src="/images/shirt.PNG" alt='/images/vercel.svg'  width={300} height={300}/>
        <Image src="/images/person.PNG" alt='/images/vercel.svg' width={300} height={300} />
    </Flex>
    </Flex>
    </Box>
  );
};

export default LandingPage;
