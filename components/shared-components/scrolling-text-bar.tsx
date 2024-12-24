import { Box, Text } from "@chakra-ui/react"
import { theme } from '@/theme/theme';


interface ScrollingTextBarPropTypes {
    children: any
    color: string | undefined | null
}



const ScrollingTextBar: React.FC<ScrollingTextBarPropTypes> = ({children, color}) => {

    return(
        <Box bg={color ? color : theme.palette.lime} width={'100%'} height={55}>
                <Text 
                fontSize={{ base: '24px', md: 35 }} // Responsive font size for mobile and desktop
                fontWeight={600}
                whiteSpace="nowrap" // Prevent text from wrapping
                overflow="hidden" // Hide overflow for smooth scrolling effect
                display="inline-block" // Needed for smooth text scrolling
                animation="scrollText 15s linear infinite"
                sx={{
                "@keyframes scrollText": {
                    from: { transform: "translateX(100%)" },
                    to: { transform: "translateX(-100%)" }
                }
                }}>
                    {children}
                </Text>
        </Box>
    )
}

export default ScrollingTextBar