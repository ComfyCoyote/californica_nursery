import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react"
import Image from "next/image";
import Navbar from "../layout/navbar";
import { iansBio, bio1, bio2, jacksonsBio, jacksonsBioAlt, iansBioAlt, bio1Alt, bio2Alt, bio3Alt  } from "./bios";
import { theme } from "@/theme/theme";

//include ian and jackson image in web assets/web/images
//replace signatures with green ones

const AboutPage = () => {

    return(
        <>
        <Box overflowX={'hidden'} bg='NavajoWhite' h='100%' w='100%' pt={40} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <VStack spacing={0} p={0}>
            <VStack bg='NavajoWhite'>
            <Box bg={theme.palette.lime} width={'100%'}>
                <Text textAlign={'center'} fontSize={30} fontWeight={700}>
                    CALIFORNIA NATIVE PLANTS, GROWN BY CALIFORNIA LOCALS
                </Text>
            </Box>
            <HStack p={10} width={'100%'}>
                <VStack>
                    <Text fontSize={20} fontWeight={600} p={10}>
                        {bio1Alt}
                    </Text>
                    <Text fontSize={20} fontWeight={600}>
                        {bio2Alt}
                    </Text>
                    <Text fontSize={20} fontWeight={600}>
                        {bio3Alt}
                    </Text>
                </VStack>
                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-end'}>
                    <Image priority src='/images/ian_jackson.jpg' alt='ian and jackson' width={300} height={200}/>
                </Box>
            </HStack>
            </VStack>
                <Box bg={theme.palette.lime} width={'100%'}>
                <Text fontSize={50} fontWeight={600} animation="scrollText 15s linear infinite"
                sx={{
                    "@keyframes scrollText": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(-100%)" }
                    }
                }}>
                    Heal the urban landscape   Plant a native plant   Support local wildlife
                </Text>
                </Box>
            <HStack bg={theme.palette.darkBrown} width={'100%'}>
                <Image priority src='/images/Ian-2.png' alt='hiking photo' width={600} height={600}/>
                <VStack p={10} width={'100%'}>
                    <Text fontSize={30} fontWeight={600} color={'white'}>
                            IAN RHODES
                    </Text>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                        {iansBioAlt}
                    </Text>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                        <Image priority src='/images/Ian Signature.png' alt="jackson signature" width={300} height={200}/>
                    </Box>
                </VStack>
            </HStack>
            <HStack bg={theme.palette.olive} width={'100%'}>
                <VStack p={10} width={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={30} fontWeight={600} color={'white'}>
                            JACKSON DRISCOLL
                    </Text>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                        {jacksonsBioAlt}
                    </Text>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                        <Image priority src='/images/Jackson signature.png' alt="jackson signature" width={300} height={200}/>
                    </Box>
                </VStack>
                <Image priority src="/images/jackson1.png" alt="hking photo" width={600} height={600}/>
            </HStack>
            <Box bg={theme.palette.lime} width={'100%'}>
            <Text fontSize={50} fontWeight={600} animation="scrollText 15s linear infinite"
      sx={{
        "@keyframes scrollText": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(-100%)" }
        }
      }}>
                EMAIL US - CALIFORNICANURSERY@GMAIL.COM
            </Text>
            </Box>
            </VStack>
        </Box>
        </>

    )
}

export default AboutPage;