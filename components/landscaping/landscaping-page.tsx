import Image from "next/image"
import { HStack } from "@chakra-ui/react"

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

    return(
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

    )
}

export default LandscapingPage