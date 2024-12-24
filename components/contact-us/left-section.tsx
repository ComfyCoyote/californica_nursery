import { VStack, Text, Stack, Link, Box} from "@chakra-ui/react";
import Image from "next/image";
import { theme } from '../../theme/theme' 
import SocialMediaIcons from "./social-media-icons";




const LeftSection: React.FC = () => {

    return(
        <VStack alignItems={{base: 'center', md: 'left'}} width={{base: '100%', md: '500px'}}>
            <Text fontSize={20} color={theme.palette.cream}>
                {'Feel free to contact us for any inquiries, and we will get back to you as soon as possible'}
            </Text>
            <Stack direction={{base: 'column', md: 'row'}} alignItems={{base: 'center', md: 'center'}}>
                <Text fontSize={25} fontWeight={600} color={theme.palette.cream}>Email: </Text>
                <Link href="mailto:info@californicanursery.com" color="blue.500" isExternal >
                    <Text fontSize={20} color={theme.palette.cream}>info@californicanursery.com</Text>
                </Link>
            </Stack>
            <SocialMediaIcons />
            <Box>
            <Image
                src={"/animations/contactani.gif"} 
                alt='phone animation' 
                width={350} 
                height={350} 
            />
            </Box>
        </VStack>

    )



}


export default LeftSection;