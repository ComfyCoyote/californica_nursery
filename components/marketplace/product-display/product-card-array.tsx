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

    const { open, query, searching, search} = useSearch()

    const [displayArray, setDisplayArray] = useState<Array<any>>([])
    const [cursor, setCursor] = useState<string>(props.cursor)

    useEffect(() => {
        if(searching){
            searchItems()
            search(false)
        } else {
            setDisplayArray([...props.items])
        }
    }, [searching])


        if(props.items){
            return(
                <React.Fragment>
                <Grid 
                width={open ? '50vw' : '100%'}
                templateColumns="repeat(4, 1fr)"
                gap={4}>
                {displayArray.map((item) => <ProductCard key={item.id} item={item} type={props.type} />)}
                </Grid>
                {
                    cursor && <Pagination totalPages={1} onPageChange={() => (console.log('page changed'))} loadMore={loadMore}/> 
                }
                </React.Fragment>
            )
        } else {
            return (
                <div>
                    <text>No Products</text>
                </div>
            )
        }


    async function loadMore(){

        const location = router.pathname
        const items = await axios.post('api/getItems', {'type': location, 'cursor': cursor})

        console.log(items)

        if(items){
            setCursor(items.data.cursor)
            setDisplayArray([...displayArray, ...items.data.items])
        }


    }

    async function searchItems(){

        const location = router.pathname
        const items = await axios.post('api/getItems', {'type': location, 'query': query, 'limit': 100})
        console.log(items)
        if(items){
            setCursor(items.data.cursor)
            setDisplayArray([...items.data.items])
        }
    }

    
};

export default ProductCardArray