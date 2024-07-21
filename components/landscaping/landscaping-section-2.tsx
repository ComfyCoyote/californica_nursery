import { VStack, HStack, Text, Box} from "@chakra-ui/react";
import { theme } from '../../theme/theme'       
import Image from "next/image";

const bp1 = 'Create a functioning habitat of hyper-local plants'
const bp2 = 'Utilize rainwater capture and varied topography, free from supplemental irrigation'
const bp3 = 'Work with, not against your site\'s microclimates'

const text1 = 'With four easy steps, we can transform your green space into a vibrant california native landscape full of pollinators and free from excessive water use.'
const text2 = 'Native landscaping isnt a walk in the park, so let us help you build a deeper connection with your land through a sustainable outdoor space.'


const wp1 = '1. Site Assessment and Consultation'
const wp2 = '2. Curated Plant Species List'
const wp3 = '3. Landscape Blueprint'
const wp4 = '4. Installation'

const textArr = [bp1, bp2, bp3]

const wpArr = [wp1, wp2, wp3, wp4]

interface BulletPointProps {
    text: string
}

const BulletPoint: React.FC<BulletPointProps> = ({text}) => {

    return(
        <HStack spacing={10}>
            <Image src={'/images/icons/pink_star.png'} alt="star" height={50} width={50}/>
            <Text color={theme.palette.cream} fontSize={27}>
                {text}
            </Text>
        </HStack>
    )
}

const LandscapingSectionTwo = () => {


    return(
        <VStack width={'100%'} spacing={0}>
            <Box backgroundColor={theme.palette.lime} width={'100%'} height={55} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Text fontSize={30} fontWeight={700}>
                    OUR APPROACH
                </Text>
            </Box>
            <VStack width={'100%'} p={20} display={'flex'} justifyContent={'center'} alignItems={'flex-start'} backgroundColor={theme.palette.darkBrown}>
                {
                    textArr.map((txt) => {
                        return(
                            <BulletPoint key={txt} text={txt}/>
                        )
                    })
                }
            </VStack>
            <VStack width={'100%'} height={'100%'} backgroundColor={theme.palette.olive}>
                <Box px={10} width={'100%'}>
                    <Text fontSize={25} color={theme.palette.cream} p={10}>
                        {text1}
                    </Text>
                </Box>
                <HStack 
                    px={20}
                    height={'100%'} 
                    width={"100%"}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <VStack 
                        py={10}
                        height={400}
                        width={'100%'}
                        display={'flex'} 
                        flexDirection={'column'} 
                        justifyContent={'space-between'} 
                        alignItems={'flex-start'}
                    >
                        {
                            wpArr.map((wp) => {

                                return(
                                    <Text fontSize={25} fontWeight={700} color={theme.palette.cream} key={wp}>
                                        {wp}
                                    </Text>
                                )
                            })
                        }
                    </VStack>
                    <Box 
                        bg={'green'}
                        display={'flex'}
                        alignItems={'center'}
                        flex="0 0 auto"
                        justifyContent={'center'}
                        position={'relative'}
                        >
                            <Box
                                height={500}
                                width={700}
                                zIndex={1}>
                            <Image
                                src={'/images/ian_jackson.jpg'}
                                alt="Background Image"
                                fill={true}
                                style={{objectFit: "cover"}} // Ensure it's below the overlay
                            />
                            </Box>
                            {/* Overlay Image */}
                            <Box
                                height={200}
                                width={200}
                                position="absolute"
                                top={350}
                                left={600}
                                zIndex={2} >
                            <Image
                                src={'/animations/shovel transparent.gif' }
                                alt="Overlay Image"
                                fill={true}
                                style={{objectFit: "cover"}}
                                // Ensure it's above the background
                            />
                            </Box>
                    </Box>
                </HStack>
                <Text fontSize={25} color={theme.palette.cream} p={10}>
                    {text2}
                </Text>
            </VStack>
        </VStack>


    );

}

export default LandscapingSectionTwo;