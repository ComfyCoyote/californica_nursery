import { OrderItem } from '@/Interfaces/interfaces';
import {Text, VStack, Button, Input, Box, HStack} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../marketplace/shoppingCartContext/shoppingCartContext';

interface ItemProps {
  item: OrderItem;
}

const PreCheckoutItem: React.FC<ItemProps> = ({ item }) => {

  const {removeFromCart, updateItemQuantity} = useCart()

  const [isHovered, setIsHovered] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity)
   

  return (
    <HStack 
        align="center" 
        direction={{base: 'column', md: 'row'}}
        backgroundColor={isHovered ? "yellow.100" : "white"}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        justify="space-between" 
        p="4" 
        borderWidth="1px" 
        borderRadius="md">
        <Box
            width={{base: '100px', md: '150px'}}
            height={{base: '100px', md: '150px'}}
            padding={{base: '2', md: '4'}}
        >
            <Image 
              src={item.misc.image} 
              alt={item.name} 
              loading='eager'
              width={100} 
              height={100} 
          />
        </Box>
      <VStack align="flex-start" flex="1">
        <Text fontSize="lg" fontWeight="bold">{item.name}</Text>
        <Text fontSize="md">Price: ${item.misc.price/100}</Text>
        <Text fontSize="md">Quantity: 
          <Input 
            type="number"  
            value={quantity}
            min={1}
            onChange={(e) => {setQuantity(e.target.value); updateItemQuantity(e, item.catalogObjectId) }}
            w="50px"
          />
        </Text>
      </VStack>
      {isHovered && (
        <Button
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          size="sm"
          variant="ghost"
          colorScheme="red"
          onClick={(e) => {removeFromCart(e, item.catalogObjectId)}}
        >
          Remove
        </Button>
      )}
    </HStack>
  );
};

export default PreCheckoutItem;