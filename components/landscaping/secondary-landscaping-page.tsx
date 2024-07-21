import React from "react";
import { VStack, } from "@chakra-ui/react"
import LandscapingSectionOne from "./landscaping-section-1";
import LandscapingSectionTwo from "./landscaping-section-2";
import LandscapingSectionThree from "./landscaping-section-3";
import { theme } from '../../theme/theme'   



const SecondaryLandscapingPage = () => {

    return(
        <VStack backgroundColor={theme.palette.cream} spacing={0} overflowX={'hidden'}>
            <LandscapingSectionOne />
            <LandscapingSectionTwo />
            <LandscapingSectionThree />
        </VStack>

    )
}

export default SecondaryLandscapingPage;