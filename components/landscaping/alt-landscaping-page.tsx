import Image from "next/image"
import React from "react"
import { HStack, Box } from "@chakra-ui/react"
import LandscapingTitleCard from "./title-card"
import LandscapingServicesCard from "./services-card"
import LandscapingContactCard from "./contact-card"
import Navbar from "../layout/navbar"

const imageList = [
    'IMG_0092.png',
    'IMG_0960.png',
    'IMG_1012.png',
    'IMG_1180.png',
    'IMG_1305.png',
    'IMG_2254.png',
    'IMG_2569.png',
    'IMG_2577.png'
]


const LandscapingPage = () => {

    const gradient = 'linear-gradient(135deg, NavajoWhite 50%, grey 50%)';

    return(
        <React.Fragment>
        <Navbar />
        <Box padding={20} bg='NavajoWhite' overflowX={'hidden'} background={gradient} >
        <LandscapingTitleCard />
        <LandscapingServicesCard />
        <LandscapingContactCard />
        </Box>
        </React.Fragment>
        

    )
}

export default LandscapingPage


/*
<HStack>
            {imageList.map((img) => {
                return(
                    <Image
                        key={img}
                        src={`images/landscaping/${img}`}
                        alt='vercel.svg'
                        height={400}
                        width={250}
                    />

                )
            })}
        </HStack>
*/