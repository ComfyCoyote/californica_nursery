import ProductCard from "./product-card";
import { Grid } from "@chakra-ui/react"
import { useSearch } from "../search-sidebar/search-sidebar-context";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Pagination from "@/components/shared-components/pagination";
import axios from "axios";
import { useMarketplace } from "../marketplaceContext/marketplaceContext";

interface CardArrayPropTypes {
    items: any[];
    type: string;
    cursor: string;
}


const ProductCardArray: React.FC<CardArrayPropTypes> = (props : CardArrayPropTypes ) => {

    const router = useRouter()
    const location = router.pathname

    const [loading, setLoading] = useState(false)

    const { query, searching, textQuery, search} = useSearch()
    const { plantData, seedData, merchData, cursor, setCursor, setItems, setItemsBySearch} = useMarketplace()

    useEffect(() => {
        if(searching.search){
            if(searching.action === 0 || searching.action === 1){
                searchItems(searching.action)
                search(false,0)
            }
            
        } 
    }, [searching])


        if(props.items){
            return(
                <React.Fragment>
                <Grid 
                    width={'100%'}
                    p={{base: 5, md: 7}}
                    templateColumns={{base: "repeat(2) 1fr", md: "repeat(4, 1fr)"}}
                    gap={4}
                >
                {getDataType().map((item) => <ProductCard key={item.id} item={item} type={props.type} />)}
                </Grid>
                {
                    cursor?.[`${location}Cursor`] && <Pagination loading={loading} totalPages={1} loadMore={loadMore}/> 
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
        setLoading(true)
        const location = router.pathname
        const cursorKey = `${location}Cursor`
        const _cursor = cursor[cursorKey]
        const items = await axios.post('api/getItems', {'type': location, 'cursor': _cursor})

        if(items){
            sessionStorage.setItem(cursorKey, items.data.cursor)
            cursor[cursorKey] = items.data.cursor
            setCursor(cursor)
            setItems(location, items.data.items)
            setLoading(false)
        }


    }

    function getDataType(){
        if (location === "/plants") {
            return plantData;
        }
        if (location === "/seeds") {
            return seedData;
        }
        if (location === "/merch") {
           return merchData;
        } 

        return []
    }

    async function searchItems(index: number){
        let items: any = null

        if(index === 1){
            const location = router.pathname
            items = await axios.post('api/getItems', {'type': location, 'query': query, 'textFilter': '', 'limit': 100})
        }else if(index === 0){
            const location = router.pathname
            items = await axios.post('api/getItems', {'type': location, 'query': [], 'textFilter': textQuery, 'limit': 100})
        }
        
        if(items){
            setCursor(items.data.cursor)
            setItemsBySearch(location, items.data.items)
        }
    }

    
};

export default ProductCardArray