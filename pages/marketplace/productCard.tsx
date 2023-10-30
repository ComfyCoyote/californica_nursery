import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { useCart } from '@/shoppingCartContext/shoppingCartContext'
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces'
import React, {useEffect, useState} from 'react'
import { getImageURL } from '@/firebase/firebaseFunctions'
import Image from 'next/image'

interface ProductCardPropTypes {
    item: Plant | Apparel | PlaidProduct
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
                src={imageCheck(item)}
                alt='Green double couch with wooden legs'
                width={300}
                height={300}
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
                <Button variant='ghost' colorScheme='blue' onClick={(event) => console.log('buttonclicked')}>
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

    function imageCheck(item: Plant | PlaidProduct | Apparel): string {
        if(item.imageUrls){
            if(typeof item.imageUrls[0] === 'string'){
                return item.imageUrls[0]
            } else {
                return ''
            }
        } else {

            return ''
        }

    }
}




export default ProductCard