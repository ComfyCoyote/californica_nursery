import { VStack, Image } from "@chakra-ui/react"






const LandscapingTitleCard = () => {

    return(
        <VStack   // Set the height of the container, adjust as needed
            justifyContent="center"
            alignItems="center"
            height={200}
        >
           <Image
            src="/images/CA native plants.png"
            alt="Your Image Alt Text"
          />
        </VStack>
    )
}

export default LandscapingTitleCard