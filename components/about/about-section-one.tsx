import { Stack, Box, Text } from "@chakra-ui/react"
import { theme } from "@/theme/theme";
import Image from "next/image";
import { bio1Alt, bio2Alt, bio3Alt } from "./bios";

const AboutPageSectionOne = () => {

    return(

        <>
         <Stack bg={theme.palette.cream} direction={{base: 'column', md: 'column'}}>
            <Box 
                backgroundColor={theme.palette.lime} 
                width={'100vw'} 
                height={55} 
                display={'flex'} 
                justifyContent={'center'} 
                textAlign={'center'} 
                alignItems={'center'}
            >
                <Text
                    whiteSpace="nowrap" 
                    textAlign={'center'}
                    overflow="visible"   
                    textOverflow="clip" 
                    fontSize={{ base: '13px', md: '30px' }} 
                    fontWeight={700}>
                    CALIFORNIA NATIVE PLANTS, GROWN BY CALIFORNIA LOCALS
                </Text>
            </Box>
            <Stack
                p={{base: 5, md: 20}}
                spacing={20}
                direction={{ base: 'column', md: 'row' }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                width={'100%'}
            >
            <Text
                h={{base: 400, md: 600}}
                flex={1} 
                fontSize={{ base: '16px', md: '30px' }} 
                fontWeight={600}
                py={10}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'} 
            >
                {bio1Alt + ' ' + bio2Alt + ' ' + bio3Alt}
            </Text>
            <Box
                flex={1} 
                position={'relative'}
                width={{ base: '225px', md: '800px', lg: '1000px' }} 
                height={{ base: '375px', md: '700px', lg: '1000px' }} 
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Image
                priority
                src='/images/about/Jackson & Ian 2.webp'
                alt='ian and jackson'
                fill
                style={{ objectFit: "cover" }}
                />
            </Box>
            </Stack>
            </Stack>
        </>
    )
}

export default AboutPageSectionOne;