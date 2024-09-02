import { VStack, Box, Text, Stack } from "@chakra-ui/react";
import { theme } from '../../theme/theme'       
import Image from "next/image";

const text1 = 'we are determined to restore the greater Long Beach area into a beautiful and ecologically valuable refuge for our local wildlife, one garden at a time.'
const cbd = 'Califonica Nursery'
const text2 = 'Nature is the best designer and our work reflects its beauty.'


const LandscapingSectionOne = () => {


    return(
        <VStack width={'100%'} pt={{base: 85, md: 105}} spacing={0}>
            <Box backgroundColor={theme.palette.lime} width={'100%'} height={55} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={30} fontWeight={700}>
                    LETS KILL YOUR LAWN!!
                </Text>
            </Box>
            <Stack p={0} width={'100%'} spacing={0} direction={{base: 'column', md: 'row' }}>
                <Box position={'relative'} height={'70vh'} width={'63vh'}>
                    <Image 
                        src={'/images/landscaping/brett_ian_landscaping_cropped.png'} 
                        alt={'Ian and Jackson killing the lawn'} 
                        fill  
                        style={{objectFit: "cover"}} 
                    />
                </Box>
                <Box position={'relative'} height={'70vh'} width={'66vh'}>
                    <Image 
                        src={'/images/landscaping/killyourlawn1.png'} 
                        alt={'Ian and Jackson killing the lawn'} 
                        fill  
                        style={{objectFit: "cover"}} 
                    />
                </Box>
                <Box position={'relative'} height={'70vh'} width={'63vh'}>
                    <Image 
                        src={'/images/landscaping/killyourlawn2.png'} 
                        alt={'Ian and Jackson killing the lawn'} 
                        fill  
                        style={{objectFit: "cover"}} 
                    />
                </Box>
            </Stack>
            <VStack spacing={0}>
                <Box 
                    bg={theme.palette.olive}
                    p={5}
                    width={'100%'} 
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'}
                >
            
                    <Text textAlign="center" fontSize={25} color={theme.palette.cream}>
                        At Californica Nursery {text1 + ' ' + text2}
                    </Text>
                    
                </Box>
            </VStack>
        </VStack>


    );

}

export default LandscapingSectionOne;