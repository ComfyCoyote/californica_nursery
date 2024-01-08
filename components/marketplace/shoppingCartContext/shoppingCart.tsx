import { useState } from 'react';
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
  Icon,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '@/components/marketplace/shoppingCartContext/shoppingCartContext';

interface ShoppingCartPropTypes {
  open: boolean
  toggleCart: () => void

}

const ShoppingCart: React.FC<ShoppingCartPropTypes> = ({open, toggleCart}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  //const [cartItems, setCartItems] = useState<Product[]>([]);
  const { cartItems, removeFromCart, addItem, subtractItem } = useCart()
  const uniqueArray = cartItems.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })


  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };


  /*
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  */

  //const totalAmount = cartItems.reduce((total, item) => total + parseInt(item.price), 0);

  return (
    <>
      <Drawer isOpen={open} onClose={toggleCart} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>

            <DrawerBody>
              {uniqueArray.length === 0 ? (
                <Text>No items in the cart</Text>
              ) : (
                uniqueArray.map((item) => (
                  <Flex key={item.id} justifyContent="space-between" alignItems="center" mb={4}>
                    <Box>
                      <Text>{item.name}</Text>
                      <Text>{cartItems.filter(x => x.name === item.name).length }</Text>
                    </Box>
                    <Button  variant='ghost' onClick={(e) => {addItem(e, item)}}>
                      <AddIcon/>
                    </Button>
                    <Button variant='ghost' onClick={(e) => {subtractItem(e, item)}}>
                      <MinusIcon/>
                    </Button>
                    <Button variant="outline" colorScheme="red" size="sm" onClick={(e) => removeFromCart(e, item.id)}>
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
              <Button colorScheme="blue" size="sm">
                Checkout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default ShoppingCart;