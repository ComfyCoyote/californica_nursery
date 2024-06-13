import React from "react";
import { VStack, } from "@chakra-ui/react"
import LandscapingSectionOne from "./landscaping-section-1";
import LandscapingSectionTwo from "./landscaping-section-2";
import LandscapingSectionThree from "./landscaping-section-3";




const SecondaryLandscapingPage = () => {

    return(
        <VStack backgroundColor={'navajowhite'} spacing={0}>
            <LandscapingSectionOne />
            <LandscapingSectionTwo />
            <LandscapingSectionThree />
        </VStack>

    )
}

export default SecondaryLandscapingPage;