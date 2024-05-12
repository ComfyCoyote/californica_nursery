import { OrderItem } from '@/Interfaces/interfaces';
import { Flex, Image, Text, VStack, Button, Input} from '@chakra-ui/react';
import { useState } from 'react';
import { useCart } from '../marketplace/shoppingCartContext/shoppingCartContext';

interface ItemProps {
  item: OrderItem;
}

const PreCheckoutItem: React.FC<ItemProps> = ({ item }) => {
    console.log(item)

    const {removeFromCart, updateItemQuantity} = useCart()

    const [isHovered, setIsHovered] = useState(false);
    const [quantity, setQuantity] = useState(item.quantity)
   

  return (
    <Flex 
        align="center" 
        backgroundColor={isHovered ? "yellow.100" : "white"}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        justify="space-between" 
        p="4" 
        borderWidth="1px" 
        borderRadius="md">
      <Image src={item.misc.image} alt={item.name} boxSize="100px" objectFit="cover" mr="4" />
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
    </Flex>
  );
};

export default PreCheckoutItem;