import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { useCart } from '@/shoppingCartContext/shoppingCartContext'
import { Apparel, Plant } from '@/Interfaces/interfaces'
import React, {useEffect, useState} from 'react'
import { getImageURL } from '@/firebase/firebaseFunctions'

interface ProductCardPropTypes {
    item: Plant | Apparel
}


const ProductCard: React.FC<ProductCardPropTypes> = ({item}) => {

    const { addToCart } = useCart()

    const [image, setImage] = useState('')

    useEffect(() => {
        getImageURL('Muzzammil Adamjee').then((image) =>
        setImage(image))
        
    }, [])

    if(item){

    return(
        <Card maxW='sm'>
            <CardBody>
                <Image
                src={image}
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>{item.name}</Heading>
                <Text>
                    {item.description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    {item.price}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue' onClick={(event) => addToCart(event, item)}>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
            </Card>
    )
    } else {
        return(
            <div>
                <text>No items available</text>
            </div>
        )

    }
}




export default ProductCard