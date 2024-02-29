import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react"
import { 
    aboutText1,
    aboutText2,
    aboutText3,
    aboutText4,
    aboutText5,
    aboutText6,
    aboutText7,
    aboutText8,
    aboutText9,
    aboutText10
 } from "./about-text";
import Image from "next/image";
import Navbar from "../navbar";
import { iansBio, bio1, jacksonsBio } from "./bios";
import { theme } from "@/theme/theme";



const textArr = [
    aboutText1,
    aboutText2,
    aboutText3,
    aboutText4,
    aboutText5,
    aboutText6,
    aboutText7,
    aboutText8,
    aboutText9,
    aboutText10
]


const AboutPage = () => {

    return(
        <>
        <Navbar />
        <Box overflowX={'hidden'} bg='NavajoWhite' h='100%' w='100%' pt={40} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <VStack spacing={0} p={0}>
            <Text bg="brown">
                About Us
            </Text>
                <Box bg={theme.palette.lime} width={'100%'}>
                <Text fontSize={50} fontWeight={600} animation="scrollText 15s linear infinite"
                        sx={{
                            "@keyframes scrollText": {
                            from: { transform: "translateX(100%)" },
                            to: { transform: "translateX(-100%)" }
                            }
                        }}>
                    California Native Plants, Grown by Claifornia Locals
                </Text>
                </Box>
            <HStack bg={theme.palette.olive} width={'100%'}>
                <VStack width={'100%'} p={10} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                        WHAT WE DO
                    </Text>
                    <Text color={'white'}>
                        {bio1}
                    </Text>
                </VStack>
                <Image fill priority src='/images/jackson2.png' alt='ian and jackson' width={600}  height={600}/>
            </HStack>
                <Box bg={theme.palette.lime} width={'100%'}>
                <Text fontSize={50} fontWeight={600} animation="scrollText 15s linear infinite"
      sx={{
        "@keyframes scrollText": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" }
        }
      }}>
                    Our Landscaping services, save your yard, plant a native
                </Text>
                </Box>
            <HStack bg={theme.palette.darkBrown} width={'100%'}>
                <Image fill priority src='/images/jackson1.png' alt='hiking photo' width={600} height={600}/>
                <VStack p={10} width={'100%'}>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                            IAN RHODES
                    </Text>
                    <Text color={'white'}>
                        {iansBio}
                    </Text>
                </VStack>
            </HStack>
            <HStack bg={theme.palette.olive} width={'100%'}>
                <VStack p={10} width={'100%'}>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                            JACKSON DRISCOLL
                    </Text>
                    <Text color={'white'}>
                        {jacksonsBio}
                    </Text>
                </VStack>
                <Image fill priority src="/images/Jackson & Ian 2.png" alt="hking photo" width={600} height={600}/>
            </HStack>
            <Box bg={theme.palette.lime} width={'100%'}>
            <Text fontSize={50} fontWeight={600} animation="scrollText 15s linear infinite"
      sx={{
        "@keyframes scrollText": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" }
        }
      }}>
                Email us Californica@gmail.com call us (000) 000-0000
            </Text>
            </Box>
            </VStack>
        </Box>
        </>

    )
}

export default AboutPage;