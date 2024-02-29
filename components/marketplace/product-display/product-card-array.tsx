import { Apparel, PlaidProduct, Plant, Seed } from "@/Interfaces/interfaces";
import ProductCard from "./product-card";
import { Grid } from "@chakra-ui/react"
import { useState } from "react";
import ProductDetailView from "../product-detail-view/product-detail-view";
import { useSearch } from "../search-sidebar/search-sidebar-context";

interface CardArrayPropTypes {
    items: Plant[] | Seed[]
}


const ProductCardArray: React.FC<CardArrayPropTypes> = (props : CardArrayPropTypes ) => {

    const [currentProduct, setCurrentProduct] = useState<Plant | Seed | null>(null)

    const {open} = useSearch()

    if(currentProduct){

        return(
            <ProductDetailView item={currentProduct} setProduct={setCurrentProduct}/>
        )
    } else {

        if(props.items){
            return(
                <Grid 
                
                width={open ? '50vw' : '100%'}
                templateColumns="repeat(4, 1fr)"
                gap={4}>
                {props.items.map((item) => <ProductCard key={item.id} item={item} setProduct={setCurrentProduct}/>)}
                </Grid>
            )
        } else {
            return (
                <div>
                    <text>No Products</text>
                </div>
            )
        }




    }

    
};

export default ProductCardArray