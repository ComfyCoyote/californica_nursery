import { VStack, Image, HStack, Text } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import { InfoIcon } from "@chakra-ui/icons"
import { EmailIcon } from "@chakra-ui/icons"
import { AtSignIcon } from "@chakra-ui/icons"

const services = [
    'Site consultation',
    'Curated plant palette list',
    'Landscape design blueprints',
    'Full lawn-to-native plant installation',
    'Monthly native landscape maintentance'
]



const LandscapingContactCard = () => {

    return(
        <HStack display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Image
            src={"/images/4EF49614-2297-4C64-8F81-AF0CCF1D1EF6.png"}
            alt={'alternative text'}
            boxSize={700}
            objectFit="cover"
            clipPath='polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)'
        />
        <VStack   // Set the height of the container, adjust as needed
            display={'flex'}
            justifyContent="flex-start"
            
        >
            <Text bgColor={'green.300'} fontSize={35} padding={3} borderRadius={30}>
                Contact for a Consultation
            </Text>
            <Text fontSize={34}>
                Ian Rhodes and Jackson Driscoll
            </Text>
            <HStack>
                <PhoneIcon color={'green.300'}/>
                <Text fontSize={30} fontWeight={700}>
                    {'(562) 472-9516, (562) 673-9550'}
                </Text>
            </HStack>
            <HStack>
                <InfoIcon color={'green.300'}/>
                <Text fontSize={30} fontWeight={700}>
                    Long Beach, CA
                </Text>
            </HStack>
            <HStack>
                <EmailIcon color={'green.300'}/>
                <Text fontSize={30} fontWeight={700}>
                    californicanursery@gmail.com
                </Text>
            </HStack>
            <HStack>
                <AtSignIcon color={'green.300'}/>
                <Text fontSize={30} fontWeight={700}>
                    Instagram: @californicanursery
                </Text>
            </HStack>
        </VStack>
        </HStack>
    )
}

export default LandscapingContactCard;