import { VStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";


interface LinkIconPropTypes {

    iconName: string
    color: string

}

const LinkIcon: React.FC<LinkIconPropTypes> = ({iconName, color}) => {

    const [hover, setHover] = useState(false)

    return(

        <VStack>
        <Link href={`/${iconName}`}>
        <Image
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            style={{cursor: 'pointer' }}  
            src={hover ? `/animations/${iconName}ani.gif` : `/images/home_images/${iconName}.PNG`} 
            alt='/images/vercel.svg' 
            width={350} height={350} />
        </Link>
        <Link href={`/${iconName}`}>
        <Button 
            border="2px solid black" 
            borderRadius={0}
            bg={color}
            color="black" 
        >
            {iconName.toUpperCase()}
        </Button>
        </Link>
        </VStack>

    )
}

export default LinkIcon;