import { getImageURL, queryFirestorePlants } from "@/firebase/firebaseFunctions"
import MarketplaceDrawer from "@/components/marketplace-drawer"
import React from 'react'
import Navbar from "@/components/navbar"
import { useCart } from "@/components/marketplace/shoppingCartContext/shoppingCartContext"
import { Grid } from "@chakra-ui/react"
import ProductCardArray from "./product-display/product-card-array"
import { Box } from "@chakra-ui/react"
import { useState } from "react"

interface MarketplacePropTypes{
    data: Array<Object>
    
}

async function getSampleImage() {
    const image = await getImageURL('sample image')
    return image
    
}

const Marketplace: React.FC<MarketplacePropTypes>= ({data}) => {

    const { cartItems } = useCart()

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };


    if(data){

        return(
            <React.Fragment>
            <Navbar
                handleDrawerOpen={handleDrawerOpen}
            />
            <MarketplaceDrawer 
                isDrawerOpen={isDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
            />
            <Box bg='NavajoWhite' h='100%' w='100%' p={10}>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <ProductCardArray items={data} secondItem={'test data'}/> 
            </Grid>
            </Box>
            </React.Fragment>

        )

    } else {

        return(
          <React.Fragment>
            <Navbar handleDrawerOpen={handleDrawerOpen}/>
            <div>
                <text>The data was unable to be fetched</text>
            </div>
          </React.Fragment>
            
        )

    }
}


export default Marketplace;