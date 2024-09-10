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
import { theme } from '@/theme/theme';


interface ShoppingCartPropTypes {
  open: boolean
  toggleCart: () => void

}

const ShoppingCart: React.FC<ShoppingCartPropTypes> = ({open, toggleCart}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<OrderItem[]>([])
  const [checkoutLink, setCheckoutLink] = useState('')
  //const [cartItems, setCartItems] = useState<Product[]>([]);
  const { orderItems, removeFromCart } = useCart()


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
          <DrawerContent bg={theme.palette.darkBrown}>
            <DrawerCloseButton />
            <DrawerHeader color={theme.palette.cream}>Shopping Cart</DrawerHeader>
            <DrawerBody >
              {orderItems.length === 0 ? (
                <Text>No items in the cart</Text>
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
              <Link href={`/checkout/pre-checkout?redirect=/plants`}>
              <Button colorScheme="yellow" size="sm">
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