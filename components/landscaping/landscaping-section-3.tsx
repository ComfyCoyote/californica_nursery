import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import { theme } from '../../theme/theme'       
import Image from "next/image";

//spacing for califronica nursery
// remove scrollbar for image carousel

const images = [
    'IMG_0092.png',
    'IMG_0960.png',
    'IMG_1012.png',
    'IMG_1180.png',
    'IMG_1305.png',
    'IMG_2254.png',
    'IMG_2569.png',
    'IMG_2577.png'
]



const LandscapingSectionThree = () => {


    return(
        <VStack width={'100%'} spacing={0}>
            <Box 
                display={'flex'}
                alignItems="center" 
                justifyContent="center" 
                bg={theme.palette.lime} 
                width={'100%'} 
                h={55}
            >
                <Text 
                    display={'flex'}
                    alignItems="center" 
                    justifyContent="center"
                    fontSize={30} 
                    fontWeight={700} 
                    animation="scrollText 15s linear infinite"
                    noOfLines={1}
                    sx={{
                        "@keyframes scrollText": {
                        from: { transform: "translateX(100%)" },
                        to: { transform: "translateX(-100%)" }
                        }
                }}>
                   <span>EMAIL US CALIFORNICANURSERY@GMAIL.COM</span>
                </Text>
            </Box>
            <Box
                overflowX="scroll"
                bg={theme.palette.darkBrown}
                whiteSpace="nowrap"
                w="100%"
                height={650}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="md"
                >
            <HStack 
                spacing={4} 
                width={'100%'}
                style={{
                    msOverflowStyle: 'none',  /* Internet Explorer 10+ */
                    scrollbarWidth: 'none',   /* Firefox */
                  }}>
                    {images.map((src, index) => (
                    <Box
                        borderRadius={0}
                        key={src}
                        display="inline-block"
                        flex="0 0 auto"
                        overflow="hidden"
                        position={'relative'}
                        width={400} 
                        height={600} 
                    >
                        <Image 
                        
                            style={{objectFit: "cover", borderRadius: 0}} 
                            src={`/images/landscaping/${src}`} 
                            alt={`Image ${index + 1}`}
                            fill={true}
                            
                        />
                    </Box>
                    ))}
            </HStack>
            </Box>
        </VStack>
        


    );

}

export default LandscapingSectionThree;