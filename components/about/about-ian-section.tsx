import { HStack, VStack, Box, Text, Stack } from "@chakra-ui/react"
import { theme } from "@/theme/theme";
import Image from "next/image";
import { iansBioAlt } from "./bios";
import ScrollingTextBar from "../shared-components/scrolling-text-bar";


const AboutPageIanSection = () => {

    return(
        <>
          <ScrollingTextBar color={null}>
                <Stack spacing={250} direction={'row'}>
                <Text>
                    HEAL THE URBAN LANDSCAPE
                </Text>
                <Text>
                PLANT A NATIVE PLANT
                </Text>
                <Text>
                SUPPORT LOCAL WILDLIFE
                </Text>
                </Stack>
            </ScrollingTextBar>
            <HStack
                bg={theme.palette.darkBrown}
                width={'100%'}
                flexDirection={{ base: 'column', md: 'row' }} 
                alignItems={'center'}
                spacing={0} 
            >
            <Box 
                width={{ base: '100%', md: 'auto' }} 
                height={{ base: '100%', md: 'auto' }}
                display={'flex'} 
                justifyContent={'center'}
            >
                <Image
                priority
                src='/images/about/Ian-2.webp'
                alt='hiking photo'
                width={900}
                height={900}
                />
            </Box>
            <VStack
                p={{ base: 5, md: 10 }} 
                width={{ base: '100%', md: 'auto' }} 
                alignItems={{ base: 'center', md: 'flex-start' }} 
                textAlign={{ base: 'center', md: 'left' }} 
                spacing={4} 
            >
                <Text
                fontSize={{ base: '24px', md: '30px' }} 
                fontWeight={600}
                color={'white'}
                >
                IAN RHODES
                </Text>
                <Text
                fontSize={{ base: '16px', md: '20px' }} 
                fontWeight={600}
                color={'white'}
                >
                {iansBioAlt}
                </Text>
                <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={{ base: 'center', md: 'flex-start' }} 
                width={{ base: '100%', md: 'auto' }}
                >
                <Image
                    priority
                    src='/images/about/signature ian green.png'
                    alt="ian signature"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto' }} 
                />
                </Box>
            </VStack>
            </HStack>
        </>
    )
}

export default AboutPageIanSection;