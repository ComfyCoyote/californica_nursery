import React from 'react';
import { VStack, Text, ListItem, UnorderedList } from '@chakra-ui/react';
import { Apparel, Plant, PlaidProduct} from '@/Interfaces/interfaces';

interface ProductListProps {
    products: Array<Plant | Apparel | PlaidProduct>;
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    if(products){
    return (
        <VStack align="flex-start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold">Product List</Text>
        <UnorderedList listStyleType="none" px={0}>
            {products.map((product) => (
            <ListItem key={product.id}>
                <Text fontSize="lg" fontWeight="medium">{product.name}</Text>
            </ListItem>
            ))}
        </UnorderedList>
        </VStack>
    );
    } else {
        return(
            <div>
                <text>
                    No checkout items available
                </text>
            </div>
        )
    }
};
  
  export default ProductList;
  