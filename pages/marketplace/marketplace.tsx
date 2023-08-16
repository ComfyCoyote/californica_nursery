'use client'

import { getImageURL, listImages, queryFirestorePlants } from "@/firebase/firebaseFunctions"
import ProductCard from "./productCardTest"
import MarketplaceDrawer from "@/components/drawer"
import React, {useEffect, useState} from 'react'
import Navbar from "@/components/navbar"
import TabBar from "@/components/tab-bar"
import ShoppingCart from "@/components/shoppingCart"
import { CartProvider, useCart } from "@/shoppingCartContext/shoppingCartContext"
import { Plant } from "@/Interfaces/interfaces"
import CardArray from "./productArray"
import { GetStaticProps, GetServerSideProps } from "next"
import { Image } from "@chakra-ui/react"


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


    return(
        <React.Fragment>
        <Navbar />
        <TabBar tabOptions={['Succulents', 'Flowers', 'Cacti']}/>
        <MarketplaceDrawer />
        <ShoppingCart />
        <CardArray items={props.data} secondItem={'test data'}/>
        </React.Fragment>

    )
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