import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react';
import { useCart } from '@/components/marketplace/shoppingCartContext/shoppingCartContext';
import Link from 'next/link';
import { theme } from '@/theme/theme';
import { useRouter } from 'next/router';
import path from 'path';


interface ShoppingCartPropTypes {
  open: boolean
  toggleCart: () => void

}

const ShoppingCart: React.FC<ShoppingCartPropTypes> = ({open, toggleCart}) => {
  //const [cartItems, setCartItems] = useState<Product[]>([]);
  const { orderItems, removeFromCart } = useCart()

  const { pathname } = useRouter()


  return (
    <>
      <Drawer isOpen={open} onClose={toggleCart} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent bg={theme.palette.darkBrown}>
            <DrawerHeader 
              color={theme.palette.cream}
              >
                <HStack
                  width={'100%'}
                  justifyContent={'space-between'}
                  alignItems={'center'}>
                  <Text>
                  Shopping Cart
                  </Text>
                  <DrawerCloseButton color={theme.palette.cream}/>
                </HStack>
              </DrawerHeader>
            <DrawerBody >
              {orderItems.length === 0 ? (
                <Text color={theme.palette.cream}>No items in the cart</Text>
              ) : (
                orderItems.map((item) => (
                  <Flex 
                    key={item.id} 
                    justifyContent="space-between" 
                    alignItems="center" 
                    mb={4}
                    >
                    <Box>
                      <Text color={theme.palette.cream}>{item.name}</Text>
                    </Box>
                    <Button 
                      variant="outline" 
                      colorScheme="red" 
                      size="sm" 
                      onClick={(e) => removeFromCart(e, item.catalogObjectId)}
                    >
                      Remove
                    </Button>
                  </Flex>
                ))
              )}
            </DrawerBody>

            <DrawerFooter>
              {
                /*
              <Text fontWeight="bold" fontSize="lg">
                Total: ${totalAmount}
              </Text>
              */}
              <Link href={`/checkout/pre-checkout?redirect=/plants`}>
              <Button 
                isDisabled={orderItems.length === 0} 
                colorScheme="yellow" 
                size="sm"
                onClick={checkoutClicked}>
                Checkout
              </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );

  function checkoutClicked(){
    const redirectPath = pathname.split("/")[1]
    sessionStorage.setItem("redirectPath", redirectPath)
  }


}

export default ShoppingCart;