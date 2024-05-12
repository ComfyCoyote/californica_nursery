import { Plant, Seed } from "@/Interfaces/interfaces";
import ProductCard from "./product-card";
import { Grid, useEditable } from "@chakra-ui/react"
import { useSearch } from "../search-sidebar/search-sidebar-context";
import { useEffect, useState } from "react";

interface CardArrayPropTypes {
    items: Plant[] | Seed[]
    type: string;
}


const ProductCardArray: React.FC<CardArrayPropTypes> = (props : CardArrayPropTypes ) => {

    const { filterValues, filters, open} = useSearch()

    const [displayArray, setDisplayArray] = useState<Array<any>>([])

    useEffect(() => {
        const filtered = props.items.filter(item => filterAnyFunction(item))
        setDisplayArray(filtered)
    }, [filterValues])


        if(props.items){
            return(
                <Grid 
                width={open ? '50vw' : '100%'}
                templateColumns="repeat(4, 1fr)"
                gap={4}>
                {displayArray.map((item) => <ProductCard key={item.id} item={item} type={props.type} />)}
                </Grid>
            )
        } else {
            return (
                <div>
                    <text>No Products</text>
                </div>
            )
        }


    function filterAnyFunction(item: any){
        const boo = filterValues?.length ? filterValues.length : 0
        let flat: string[] = []

        if(filters){
            flat = Object.values(filters).flatMap(value => Array.isArray(value) ? value : [value])
        } 

        if(filters !== null && flat?.length > 0){
            let itemAttributes: string[] = [];
            if(item){
                if('plantAttributes' in item){
                    const plant = item as Plant
                    const att = plant?.plantAttributes
                    if(att){
                        itemAttributes = Object.values(att).flatMap(value => Array.isArray(value) ? value : [value]);
                    }
                    
                } else if('seedAttributes' in item){
                    const seed = item as Seed
                    const att = seed?.seedAttributes
                    if(att){
                        itemAttributes = Object.values(att[0]).flatMap(value => Array.isArray(value) ? value : [value]);
                    }
                    
                }
            }

            if(itemAttributes?.some(el => flat?.includes(el))){
                return item
            }
            

        } else {

            console.log('ITEM RETURNED')

            return item
        }

    }

    function filterSpecificFunction(item: Plant | Seed | null){
        
        const boo = filterValues?.length ? filterValues.length : 0
        let flat: string[];
        
        if(filters !== null){
            flat = Object.values(filters).flatMap(value => Array.isArray(value) ? value : [value])
            let itemAttributes: string[] = [];
            if(item){
                if('plantAttributes' in item){
                    const plant = item as Plant
                    const att = plant?.plantAttributes
                    if(att){
                        itemAttributes = Object.values(att).flatMap(value => Array.isArray(value) ? value : [value]);
                    }
                    
                } else if('seedAttributes' in item){
                    const seed = item as Seed
                    const att = seed?.seedAttributes
                    if(att){
                        itemAttributes = Object.values(att[0]).flatMap(value => Array.isArray(value) ? value : [value]);
                    }
                    
                }
            }


            if(itemAttributes === flat){
                return item
            }
            

        } else {

            console.log('ITEM RETURNED')

            return item
        }

    }

    
};

export default ProductCardArray