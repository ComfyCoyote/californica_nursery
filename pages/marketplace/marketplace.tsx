'use client'

import { getImageURL, queryFirestorePlants } from "@/firebase/firebaseFunctions"
import MarketplaceDrawer from "@/components/drawer"
import React from 'react'
import Navbar from "@/components/navbar"
import TabBar from "@/components/tab-bar"
import ShoppingCart from "@/components/shoppingCart"
import { useCart } from "@/shoppingCartContext/shoppingCartContext"
import { Plant } from "@/Interfaces/interfaces"
import CardArray from "./productArray"
import { GetServerSideProps } from "next"



interface MarketplacePropTypes{
    data: Plant[]
    
}

async function getSampleImage() {
    const image = await getImageURL('sample image')
    return image
    
}

const Marketplace: React.FC<MarketplacePropTypes>= (props) => {

    const { cartItems } = useCart()

    console.log(cartItems)
    console.log(props.data)


    if(props.data){
    return(
        <React.Fragment>
        <Navbar />
        <TabBar tabOptions={['Succulents', 'Flowers', 'Cacti']}/>
        <MarketplaceDrawer />
        <ShoppingCart />
        <CardArray items={props.data} secondItem={'test data'}/>
        </React.Fragment>

    )
    } else {

        return(
            <div>
                <text>The data was unable to be fetched</text>
            </div>
        )

    }
}




export const getServerSideProps : GetServerSideProps = async () => {
    
    const data = await queryFirestorePlants('Products')
 
    
    return {
        props: {
            data,

        },
    }
}

export default Marketplace