import { HStack, VStack, Box, Text } from "@chakra-ui/react"
import { theme } from "@/theme/theme";
import Image from "next/image";
import { jacksonsBioAlt } from "./bios";




const AboutPageJacksonSection = () => {

    return(
        <>
        <HStack
            bg={theme.palette.olive}
            width={'100%'}
            flexDirection={{ base: 'column', md: 'row' }} // Stack column for mobile, row for desktop
            alignItems={'center'}
            spacing={0} // Remove space between elements when stacking
            >
            <VStack
                p={{ base: 5, md: 10 }} // Adjust padding for mobile
                width={{ base: '100%', md: '50%' }} // Full width for mobile, half for desktop
                justifyContent={'space-between'}
                alignItems={{ base: 'center', md: 'flex-start' }} // Center text for mobile, left-align for desktop
                textAlign={{ base: 'center', md: 'left' }} // Center text on mobile
                spacing={4} // Add some space between the elements in the VStack
            >
                <Text
                fontSize={{ base: '24px', md: '30px' }} // Responsive font size
                fontWeight={600}
                color={'white'}
                >
                JACKSON DRISCOLL
                </Text>
                <Text
                fontSize={{ base: '16px', md: '20px' }} // Responsive font size
                fontWeight={600}
                color={'white'}
                >
                {jacksonsBioAlt}
                </Text>
                <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={{ base: 'center', md: 'flex-start' }} // Center image on mobile, left-align on desktop
                width={{ base: '100%', md: 'auto' }} // Full width for mobile, auto for desktop
                >
                <Image
                    priority
                    src='/images/about/signature jackson green.png'
                    alt="jackson signature"
                    width={300}
                    height={200}
                    style={{ width: '100%', height: 'auto' }} // Responsive image sizing
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
                style={{ width: '100%', height: 'auto' }} // Responsive image sizing
                />
            </Box>
            </HStack>
            <Box bg={theme.palette.lime} width={'100%'} overflow={'hidden'} height={{base: 55, md: 55}} >
            <Text
                height={'100%'}
                pb={10}
                fontSize={{ base: '24px', md: '30px' }} // Responsive font size for mobile and desktop
                fontWeight={600}
                whiteSpace="nowrap" // Prevent text from wrapping
                overflow="hidden" // Hide overflow for smooth scrolling effect
                display="inline-block" // Needed for smooth text scrolling
                animation="scrollText 15s linear infinite"
                sx={{
                "@keyframes scrollText": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(-100%)" }
                }
                }}
            >
                EMAIL US - CALIFORNICANURSERY@GMAIL.COM
            </Text>
            </Box>
        </>
    )
}

export default AboutPageJacksonSection;