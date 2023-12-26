import { Apparel, Plant } from "@/Interfaces/interfaces";
import ProductCard from "./product-card";

interface CardArrayPropTypes {
    items: Array<Plant | Apparel>
    images: string[]
    secondItem: string
}


const ProductCardArray: Function = (props : CardArrayPropTypes ) => {

    if(props.items){
        return props.items.map((item) => <ProductCard key={item.id} item={item} />);
    } else {
        return (
            <div>
                <text>No Products</text>
            </div>
        )
    }
};

export default ProductCardArray