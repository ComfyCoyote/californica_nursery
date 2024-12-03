import { VStack, HStack, Box, Text } from "@chakra-ui/react";
import { theme } from '../../theme/theme'       
import Image from "next/image";

//spacing for califronica nursery
// remove scrollbar for image carousel

const images1 = [
    'IMG_0092.webp',
    'IMG_0960.webp',
    'IMG_1012.webp',
    'IMG_1180.webp',
    'IMG_1305.webp',
    'IMG_2254.webp',
    'IMG_2569.webp'
]

const images2 = [2,3,4,5,6,7,8].map(
    (i) => `killyourlawn${i+1}.webp`
)

const images = [...images1, ...images2]


const LandscapingSectionThree = () => {


    return(
        <VStack width={'100%'} spacing={0} borderRadius={0} borderBottomRadius={0}>
            <Box 
                borderRadius={0}
                display={'flex'}
                alignItems="center" 
                justifyContent="center" 
                bg={theme.palette.lime} 
                width={{base: '100%'}} 
                height={{base: 55}}
            >
                <Text 
                    display={'flex'}
                    alignItems="center" 
                    justifyContent="center"
                    fontSize={{base: '30px', md: '30px'}} 
                    fontWeight={700} 
                    animation="scrollText 15s linear infinite"
                    whiteSpace="nowrap" 
                    overflow="visible"   
                    textOverflow="clip"
                    sx={{
                        "@keyframes scrollText": {
                        from: { transform: "translateX(100%)" },
                        to: { transform: "translateX(-100%)" }
                        }
                }}>
                   EMAIL US AT CALIFORNICANURSERY@GMAIL.COM
                </Text>
            </Box>
            <Text 
                width={'100%'}
                p={5}
                bg={theme.palette.darkBrown} 
                color={theme.palette.cream}
                fontSize={{base: '30px', md: '30px'}} 
                fontWeight={700} textAlign={'center'}>
                    {'SCROLL RIGHT TO VIEW GALLERY >>'}
            </Text>
            <Box
                overflowX="scroll"
                borderBottomRadius={0}
                borderColor={theme.palette.darkBrown}
                bg={theme.palette.darkBrown}
                whiteSpace="nowrap"
                w="100%"
                height={650}
                borderWidth={1}
                boxShadow="md"
                >
            <HStack 
                borderRadius={0}
                borderBottomRadius={0}
                borderColor={theme.palette.darkBrown}
                width={'100%'}
                style={{
                    msOverflowStyle: 'none',  
                    scrollbarWidth: 'none',  
                  }}>
                    {images.map((src, index) => (
                    <Box
                        borderBottomRadius={0}
                        borderRadius={0}
                        key={src}
                        display="inline-block"
                        flex="0 0 auto"
                        overflow="hidden"
                        position={'relative'}
                        width={{base: 370, md: 400}} 
                        height={{base: 570, md: 600}} 
                    >
                        <Image 
                            style={{objectFit: "cover", borderRadius: 0}} 
                            src={`/images/landscaping/${src}`} 
                            alt={`Image ${index + 1}`}
                            quality={65}
                            loading='eager'
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