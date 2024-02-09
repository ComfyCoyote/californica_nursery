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
        <Box bg='NavajoWhite' h='100%' w='100%' p={10} pt={20}>
            <VStack>
            <Image
                src="/images/4EF49614-2297-4C64-8F81-AF0CCF1D1EF6.png"
                alt='/images/vercel.svg'
                height={600} 
                width={500} 
            />
            {
                textArr.map((txt) => {
                    return(
                        <Text key={txt}>
                            {txt}
                        </Text>
                    )
                })
            }
            </VStack>
        </Box>
        </>

    )
}

export default AboutPage;