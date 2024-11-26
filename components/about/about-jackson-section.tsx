import { HStack, VStack, Box, Text } from "@chakra-ui/react"
import { theme } from "@/theme/theme";
import Image from "next/image";
import { jacksonsBioAlt } from "./bios";
import ScrollingTextBar from "../shared-components/scrolling-text-bar";



const AboutPageJacksonSection = () => {

    return(
        <>
        <HStack
            bg={theme.palette.olive}
            width={'100%'}
            flexDirection={{ base: 'column', md: 'row' }} 
            alignItems={'center'}
            spacing={0} 
            >
            <VStack
                p={{ base: 5, md: 10 }} 
                width={{ base: '100%', md: '50%' }}
                justifyContent={'space-between'}
                alignItems={{ base: 'center', md: 'flex-start' }}
                textAlign={{ base: 'center', md: 'left' }} 
                spacing={4}
            >
                <Text
                fontSize={{ base: '24px', md: '30px' }}
                fontWeight={600}
                color={'white'}
                >
                JACKSON DRISCOLL
                </Text>
                <Text
                fontSize={{ base: '16px', md: '20px' }}
                fontWeight={600}
                color={'white'}
                >
                {jacksonsBioAlt}
                </Text>
                <Box
                display={'flex'}
                height={{ base: '100%', md: 'auto' }}
                width={{ base: '100%', md: 'auto' }} 
                >
                <Image
                    priority
                    src='/images/about/signature jackson green.png'
                    alt="jackson signature"
                    width={300}
                    height={200}
                />
                </Box>
            </VStack>
            <Box 
                width={{ base: '100%', md: '50%' }} 
                display={'flex'} 
                justifyContent={'center'}
            >
                <Image
                priority
                src="/images/about/jackson1.png"
                alt="hiking photo"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto' }}
                />
            </Box>
            </HStack>
            <ScrollingTextBar color={null}>
                EMAIL US - CALIFORNICANURSERY@GMAIL.COM
            </ScrollingTextBar>
                
        </>
    )
}

export default AboutPageJacksonSection;