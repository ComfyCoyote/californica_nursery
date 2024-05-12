import React from "react";
import { Box, HStack, VStack, Text } from "@chakra-ui/react"
import Image from "next/image";
import Navbar from "../layout/navbar";
import { theme } from "@/theme/theme";
import { uuid } from "uuidv4";


const images = ['IMG_0092.png', 'IMG_0960.png', 'IMG_1012.png', 'IMG_1180.png'];

const LandscapingPage = () => {

    return(
        <>
        <Box overflowX={'hidden'} bg='NavajoWhite' h='100%' w='100%' pt={40} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
            <VStack spacing={0} p={0}>
            <Text bg="brown">
                Landscaping
            </Text>
            <HStack p={10} width={'100%'}>
                {
                    images.map((img: string) => {
                        return(
                            <Image key={uuid()} priority src={`/images/landscaping/${img}`} alt='ian and jackson' width={500}  height={500}/>
                        )
                    })
                }
            </HStack>
                <Box pl={5} bg={theme.palette.lime} width={'100%'}>
                <Text fontSize={50} fontWeight={600}>
                    Our services include...
                </Text>
                </Box>
            <HStack width={'100%'}>
                <VStack p={10} width={'100%'}>
                    <Text fontSize={30} fontWeight={600} color={'white'}>
                            IAN RHODES
                    </Text>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                        services
                    </Text>
                </VStack>
                <Image priority src='/images/shovel.png' alt='hiking photo' width={600} height={600}/>
            </HStack>
            <Box pl={5} bg={theme.palette.lime} width={'100%'}>
                <Text fontSize={50} fontWeight={600}>
                    Our approach...
                </Text>
            </Box>
            <HStack bg={theme.palette.olive} width={'100%'}>
                <VStack p={10} width={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={30} fontWeight={600} color={'white'}>
                            JACKSON DRISCOLL
                    </Text>
                    <Text fontSize={20} fontWeight={600} color={'white'}>
                        text
                    </Text>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                        <Image priority src='/images/Jackson signature.png' alt="jackson signature" width={300} height={200}/>
                    </Box>
                </VStack>
                <Image priority src="/images/jackson1.png" alt="hking photo" width={600} height={600}/>
            </HStack>
            <Box pl={5} bg={theme.palette.lime} width={'100%'}>
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

export default LandscapingPage;