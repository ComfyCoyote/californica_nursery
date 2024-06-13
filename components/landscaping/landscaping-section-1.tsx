import { VStack, Box, Text } from "@chakra-ui/react";
import { theme } from '../../theme/theme'       
import Image from "next/image";

const text1 = 'At californica nursery, we are determined to restore the greater Long Beach area into a beautiful and ecologically valuable refuge for our local wildlife one garden at a time.'
const text2 = 'Nature is the best designer and our work reflects its beauty'


const LandscapingSectionOne = () => {


    return(
        <VStack width={'100%'} pt={105} spacing={0}>
            <Box backgroundColor={theme.palette.lime} width={'100%'} height={100} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={60} fontWeight={700}>
                    LETS KILL YOUR LAWN!!
                </Text>
            </Box>
            <Image src={'/images/landscaping/brett_ian_landscaping_cropped.png'} alt={'Ian and Jackson killing the lawn'} height={600} width={700}/>
            <VStack spacing={0}>
                <Box 
                    p={5}
                    width={'100%'} 
                    display={'flex'} 
                    justifyContent={'center'} 
                    alignItems={'center'}
                >
                    <Text textAlign="center" fontSize={25} fontWeight={700}>
                        {text1 + ' ' + text2}
                    </Text>
                </Box>
                
            </VStack>
        </VStack>


    );

}

export default LandscapingSectionOne;