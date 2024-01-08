import { getImageURL, queryFirestorePlants } from "@/firebase/firebaseFunctions"
import MarketplaceDrawer from "@/components/marketplace-drawer"
import React from 'react'
import Navbar from "@/components/navbar"
import { useCart } from "@/components/marketplace/shoppingCartContext/shoppingCartContext"
import { Grid } from "@chakra-ui/react"
import ProductCardArray from "./product-display/product-card-array"
import { Box } from "@chakra-ui/react"
import { useState } from "react"
import ShoppingCart from "./shoppingCartContext/shoppingCart"

interface MarketplacePropTypes{
    children: any
    
}

async function getSampleImage() {
    const image = await getImageURL('sample image')
    return image
    
}

const Marketplace: React.FC<MarketplacePropTypes>= ({children}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const handleShoppingCartOpen = () => {
        setShoppingCartOpen(true)
    }

    const toggleShoppingCart = () => {
        setShoppingCartOpen(!shoppingCartOpen)
    }

    return(
        <React.Fragment>
        <Navbar
            handleDrawerOpen={handleShoppingCartOpen}
        />
        <ShoppingCart 
            open={shoppingCartOpen}
            toggleCart={toggleShoppingCart}/>
        <MarketplaceDrawer 
            isDrawerOpen={isDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
        />
        <Box bg='NavajoWhite' h='100%' w='100%' p={10}>
            {children}
        </Box>
        </React.Fragment>

    )
}

/*
<Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <ProductCardArray items={data} secondItem={'test data'}/> 
            </Grid>
*/

export default Marketplace;