'use client'

import { Apparel, Plant } from "@/Interfaces/interfaces";
import ProductCard from "./productCard";

interface CardArrayPropTypes {
    items: Array<Plant | Apparel>
    images: string[]
    secondItem: string
}


const CardArray: Function = (props : CardArrayPropTypes ): JSX.Element[] => {

    return props.items.map((item) => <ProductCard key={item.id} item={item} />);
};

export default CardArray