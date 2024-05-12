import { useState, useEffect } from 'react';
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
  Text,
} from '@chakra-ui/react';
import { OrderItem } from '@/Interfaces/interfaces';
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useCart } from '@/components/marketplace/shoppingCartContext/shoppingCartContext';
import Link from 'next/link';

interface ShoppingCartPropTypes {
  open: boolean
  toggleCart: () => void

}

const ShoppingCart: React.FC<ShoppingCartPropTypes> = ({open, toggleCart}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<OrderItem[]>([])
  //const [cartItems, setCartItems] = useState<Product[]>([]);
  const { orderItems, removeFromCart, addItem, subtractItem } = useCart()


  const handleCartOpen = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };


  return (
    <>
      <Drawer isOpen={open} onClose={toggleCart} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>

            <DrawerBody>
              {orderItems.length === 0 ? (
                <Text>No items in the cart</Text>
              ) : (
                orderItems.map((item) => (
                  <Flex key={item.id} justifyContent="space-between" alignItems="center" mb={4}>
                    <Box>
                      <Text>{item.name}</Text>
                    </Box>
                    <Button variant="outline" colorScheme="red" size="sm" onClick={(e) => removeFromCart(e, item.catalogObjectId)}>
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
              <Link href="/checkout/pre-checkout">
              <Button colorScheme="blue" size="sm">
                Checkout
              </Button>
              </Link>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default ShoppingCart;