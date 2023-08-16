import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { useCart } from '@/shoppingCartContext/shoppingCartContext'
import { Plant } from '@/Interfaces/interfaces'

interface ProductCardPropTypes {
    item: Plant
}


const ProductCard: React.FC<ProductCardPropTypes> = ({item}) => {

    const { addToCart } = useCart()

    return(
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='/images/california-poppy-2319032_1920_grande.png'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>California Poppy</Heading>
                <Text>
                Eschscholzia californica, the California poppy, golden poppy, California sunlight or cup of gold, is a species of flowering plant in the family Papaveraceae, native to the United States and Mexico. It is cultivated as an ornamental plant flowering in summer spring in southern Australia, with showy cup-shaped flowers in brilliant shades of red, orange and yellow occasionally pink and white. It is also used as food or a garnish. It became the official state flower of California in 1903.
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $10.99
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
}

export default ProductCard