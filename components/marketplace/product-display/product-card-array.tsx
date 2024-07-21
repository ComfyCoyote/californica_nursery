import { Plant, Seed } from "@/Interfaces/interfaces";
import ProductCard from "./product-card";
import { Grid } from "@chakra-ui/react"
import { useSearch } from "../search-sidebar/search-sidebar-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Pagination from "@/components/shared-components/pagination";
import axios from "axios";

interface CardArrayPropTypes {
    items: any[];
    type: string;
    cursor: string;
}


const ProductCardArray: React.FC<CardArrayPropTypes> = (props : CardArrayPropTypes ) => {
    const router = useRouter()

    const { filterValues, filters, open} = useSearch()

    const [displayArray, setDisplayArray] = useState<Array<any>>([])
    const [cursor, setCursor] = useState<string>(props.cursor)

    useEffect(() => {
        const newArr = [...displayArray, ...props.items]
        const filtered = newArr.filter(item => filterAnyFunction(item))
        setDisplayArray(filtered)
    }, [filterValues])


        if(props.items){
            return(
                <React.Fragment>
                <Grid 
                width={open ? '50vw' : '100%'}
                templateColumns="repeat(4, 1fr)"
                gap={4}>
                {displayArray.map((item) => <ProductCard key={item.id} item={item} type={props.type} />)}
                </Grid>
                <Pagination totalPages={1} onPageChange={() => (console.log('page changed'))} loadMore={loadMore}/>
                </React.Fragment>
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

            return item
        }

    }

    async function loadMore(){

        const location = router.pathname
        const items = await axios.post('api/getItems', {'type': location, 'cursor': cursor})

        if(items){
            setDisplayArray([...displayArray, ...items.data.items])
        }


    }

    
};

export default ProductCardArray