import { VStack, HStack, Stack, Text, Box} from "@chakra-ui/react";
import { theme } from '../../theme/theme'       
import Image from "next/image";

const bp1 = 'Create a functioning habitat of hyper-local plants'
const bp2 = 'Utilize rainwater capture and varied topography, free from supplemental irrigation'
const bp3 = 'Work with, not against your site\'s microclimates'

const text1 = 'In four steps, we can transform your green space into a vibrant California native landscape full of pollinators and free from excessive water use.'
const text2 = 'Native landscaping isn\'t a walk in the park, so let us help you build a deeper connection with your land through a sustainable outdoor space.';





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
        <Stack width={'100%'} spacing={0} direction={ {base: 'column', md: 'column' }}>
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
            {/*hstack*/ }
            <Stack p={10} height={'100%'} direction={{base: 'column', md: 'row' }} backgroundColor={theme.palette.olive}>
            <VStack
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                width={'100%'}
                height={'100%'}
                backgroundColor={theme.palette.olive}
                spacing={{base: 20, md:2}}
                >
                <Box px={10} width={'100%'}>
                    <Text
                    fontSize={{ base: '25px', md: '25px' }} // Responsive font size for mobile and desktop
                    textAlign={{ base: 'center', md: 'left' }} // Center text on mobile, align left on desktop
                    color={theme.palette.cream}
                    >
                    {text1}
                    </Text>
                </Box>
                <VStack
                    py={15}
                    px={20}
                    height={300}
                    width={'100%'}
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={{ base: 'center', md: 'space-evenly' }} // Center content on mobile, space evenly on desktop
                    alignItems={{ base: 'center', md: 'flex-start' }} // Center align items on mobile, flex-start on desktop
                >
                    {wpArr.map((wp) => (
                    <Text fontSize={{ base: '25px', md: '25px' }} textAlign={{ base: 'center', md: 'left' }}  fontWeight={700} color={theme.palette.cream} key={wp}>
                        {wp}
                    </Text>
                    ))}
                </VStack>
                <Box px={10} width={'100%'}>
                    <Text
                        fontSize={{ base: '25px', md: '25px' }} 
                        textAlign={{ base: 'center', md: 'left' }}  
                        color={theme.palette.cream}>
                    {text2}
                    </Text>
                </Box>
            </VStack>
                <Box 
                        display={'flex'}
                        alignItems={'center'}
                        flex="0 0 auto"
                        justifyContent={'center'}
                        position={'relative'}
                        >
                            <Box
                                height={'62vh'}
                                position={'relative'}
                                width={'65vh'}
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
                                left={405}
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

            </Stack>
            </Stack>



    );

}

export default LandscapingSectionTwo;