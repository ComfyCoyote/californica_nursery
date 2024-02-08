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
import MarketplaceSearchSidebar from "./search-sidebar/search-sidebar"
import FloatingActionButton from "../shared-components/cart-fab"
import Image from "next/image"
import SearchFloatingActionButton from "../shared-components/search-fab"
import { CustomOption } from "../shared-components/search-dropdown" 
import { MultiValue } from 'react-select';

interface MarketplacePropTypes{
    children: any
    title: string;
    
}

async function getSampleImage() {
    const image = await getImageURL('sample image')
    return image
    
}

const Marketplace: React.FC<MarketplacePropTypes>= ({children, title}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)
    const [searchDrawer, setSearchDrawer] = useState(false)
    const [searchFilters, setSearchFilter] = useState([])

    const handleSearchFilterChange = (filter: MultiValue<CustomOption>) => {
        console.log(filter)
        setSearchFilter([])
    }

    const handleSearchDrawerOpen = () => {
        setSearchDrawer(true)
    };

    const handleSearchDrawerClose = () => {
        setSearchDrawer(false)
    };

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

    const handleFilterChange = (selectedFilters: string[]) => {
        // Implement your filter logic here
        console.log('Selected filters:', selectedFilters);
      };
    
    const handleSortChange = (selectedSortOption: string) => {
    // Implement your sorting logic here
    console.log('Selected sort option:', selectedSortOption);
    };

    const handleSearchChange = (searchQuery: string) => {
    // Implement your search logic here
    console.log('Search query:', searchQuery);
    };

    return(
        <React.Fragment>
        <Navbar/>
        <MarketplaceSearchSidebar 
            open={searchDrawer}
            toggleSearch={handleSearchDrawerClose}
            setOption={handleSearchFilterChange}

        />
        <ShoppingCart 
            open={shoppingCartOpen}
            toggleCart={toggleShoppingCart}/>
        <MarketplaceDrawer 
            isDrawerOpen={isDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
        />
        <Box bg='NavajoWhite' h='100%' w='100%' p={10} pt={20}>
            <Box h={70} w={300} p={5}>
                <Image src={getImage()} alt={'alternate'} width={300} height={400}/>
            </Box>
            {children}
        </Box>
        <SearchFloatingActionButton toggleSearchDrawer={handleSearchDrawerOpen}/>
        <FloatingActionButton toggleShoppingCart={toggleShoppingCart}/>
        </React.Fragment>

    )

    function getImage(): string{
        let src = ''

        switch(title){
            case 'plants':
                src = `/images/titles/${title}.png`
                break;
            case 'seeds':
                break;
            case 'merch':
                break;
        }

        return src
    }
}

/*
<Grid templateColumns="repeat(3, 1fr)" gap={4}>
            <ProductCardArray items={data} secondItem={'test data'}/> 
            </Grid>
*/

export default Marketplace;