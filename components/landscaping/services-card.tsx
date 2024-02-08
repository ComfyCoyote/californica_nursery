import { VStack, Image, HStack, Text } from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons"
import ElegantHexagonContainer from "./elegant-hexagons"

const services = [
    'Site consultation',
    'Curated plant palette list',
    'Landscape design blueprints',
    'Full lawn-to-native plant installation',
    'Monthly native landscape maintentance'
]



const LandscapingServicesCard = () => {

    return(
        <HStack display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <VStack   // Set the height of the container, adjust as needed
            display={'flex'}
            justifyContent="flex-start"
            
        >
            <Text fontSize={34}>
                SERVICES
            </Text>
            <Text fontSize={34} fontWeight={600} color={'green.400'}>
                Residential CA native plant landscape installations
            </Text>
            <Text fontSize={30} fontWeight={700}>
                Our Services Include
            </Text>
            <VStack display={'flex'} justifyContent={'flex-start'}>
            {
                services.map((t) => {
                    return(
                        <HStack key={t}>
                            <CheckIcon color='green.300' />
                            <Text fontSize={23}>
                                {t}
                            </Text>
                        </HStack>
                    )
                })
            }
            </VStack>
            
        </VStack>
        <VStack>
            <ElegantHexagonContainer />
        </VStack>
        </HStack>
    )
}

export default LandscapingServicesCard