import { Apparel, PlaidProduct, Plant } from "@/Interfaces/interfaces";
import ProductCard from "./product-card";
import { Grid } from "@chakra-ui/react"

interface CardArrayPropTypes {
    items: Array<PlaidProduct>
}


const ProductCardArray: React.FC<CardArrayPropTypes> = (props : CardArrayPropTypes ) => {

    if(props.items){
        return(
            <Grid 
            pt={20}
            templateColumns="repeat(3, 1fr)"
            gap={4}>
            {props.items.map((item) => <ProductCard key={item.id} item={item} />)}
            </Grid>
        )
    } else {
        return (
            <div>
                <text>No Products</text>
            </div>
        )
    }
};

export default ProductCardArray