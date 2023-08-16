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
import { useCart } from '@/shoppingCartContext/shoppingCartContext';

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ShoppingCart() {
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

  const totalAmount = cartItems.reduce((total, item) => total + parseInt(item.price), 0);

  return (
    <>
      <Alert status='success'>
      <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
      <Button onClick={handleCartOpen} leftIcon={<Icon as={FiShoppingCart} />}>
        Cart ({cartItems.length})
      </Button>

      <Drawer isOpen={isCartOpen} onClose={handleCartClose} placement="right" size="sm">
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
                      <Text fontWeight="bold">${item.price}</Text>
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
              <Text fontWeight="bold" fontSize="lg">
                Total: ${totalAmount}
              </Text>
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
