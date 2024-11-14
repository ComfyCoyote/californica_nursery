import { VStack, Text, HStack, Link} from "@chakra-ui/react";
import { theme } from '../../theme/theme' 
import SocialMediaIcons from "./social-media-icons";




const LeftSection: React.FC = () => {

    return(
        <VStack alignItems={'left'} maxW={400}>
            <Text fontSize={20} color={theme.palette.cream}>
                {'Feel free to contact us for any inquiries, and we will get back to you as soon as possible'}
            </Text>
            <HStack>
                <Text fontSize={25} fontWeight={600} color={theme.palette.cream}>Email: </Text>
                <Link href="mailto:californicanursery@gmail.com" color="blue.500" isExternal >
                    <Text fontSize={20} color={theme.palette.cream}>californicanursery@gmail.com</Text>
                </Link>
            </HStack>
            <HStack>
                <Text fontSize={25} fontWeight={600} color={theme.palette.cream}>Phone: </Text>
                <Text fontSize={20} color={theme.palette.cream}> Need a number</Text>
            </HStack>
            <SocialMediaIcons />
        </VStack>

    )



}


export default LeftSection;