import React from "react";
import { Box } from "@chakra-ui/react"
import AboutPageSectionOne from "./about-section-one";
import AboutPageIanSection from "./about-ian-section";
import AboutPageJacksonSection from "./about-jackson-section";

//include ian and jackson image in web assets/web/images
//replace signatures with green ones


const AboutPage = () => {

    return(
        <Box 
            overflow={'hidden'} 
            h='100%' 
            w='100%' 
            display={'flex'} 
            pt={{ base: '86px', md: '108px' }}
            flexDirection={'column'} 
            justifyContent={'space-evenly'}
        >
            <AboutPageSectionOne />
            <AboutPageIanSection />
            <AboutPageJacksonSection />
        </Box>

    )
}

export default AboutPage;