import { Stack, Box, Text } from "@chakra-ui/react"
import { theme } from "@/theme/theme";
import Image from "next/image";
import { bio1Alt, bio2Alt, bio3Alt } from "./bios";

const AboutPageSectionOne = () => {

    return(

        <>
         <Stack bg={theme.palette.cream} direction={{base: 'column', md: 'column'}}>
            <Box backgroundColor={theme.palette.lime} width={'100%'} height={75} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text
                    whiteSpace="nowrap" 
                    overflow="visible"   
                    textOverflow="clip" 
                    fontSize={{ base: '20px', md: '40px' }} 
                    fontWeight={700}>
                    CALIFORNIA NATIVE PLANTS, GROWN BY CALIFORNIA LOCALS
                </Text>
            </Box>
            <Stack
                p={{base: 5, md:20}}
                direction={{ base: 'column', md: 'row' }} // Column direction for mobile, row for desktop
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                width={'100%'}
            >
            <Text
                flex={1} // Ensure the text takes up equal space
                fontSize={{ base: '16px', md: '20px' }} // Responsive font size
                fontWeight={600}
                p={10}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                textAlign={'center'} // Center text for better mobile appearance
            >
                {bio1Alt + ' ' + bio2Alt + ' ' + bio3Alt}
            </Text>
            <Box
                flex={1} // Ensure the image box takes up equal space
                position={'relative'}
                width={{ base: '100%', md: '800px' }} // Full width on mobile, fixed width on desktop
                height={{ base: '375px', md: '700px' }} // Adjusted heights for consistency
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
            >
                <Image
                priority
                src='/images/Jackson & Ian 2.png'
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