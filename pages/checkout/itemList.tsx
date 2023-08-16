import React from 'react';
import { VStack, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import { Apparel, Plant } from '@/Interfaces/interfaces';

interface ProductListProps {
    products: Array<Plant | Apparel>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    return (
        <VStack align="flex-start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">Product List</Text>
        <UnorderedList listStyleType="none" px={0}>
            {products.map((product) => (
            <ListItem key={product.id}>
                <Text fontSize="lg" fontWeight="medium">{product.name}</Text>
                <Text fontSize="sm" color="gray.500">${product.price}</Text>
            </ListItem>
            ))}
        </UnorderedList>
        </VStack>
    );
};
  
  export default ProductList;
  