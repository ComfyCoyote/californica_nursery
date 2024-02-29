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
import { useSearch } from "./search-sidebar/search-sidebar-context"

interface MarketplacePropTypes{
    children: any
    title: string;
    
}


const Marketplace: React.FC<MarketplacePropTypes>= ({children, title}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)
    const [searchDrawer, setSearchDrawer] = useState(false)
    const [searchFilters, setSearchFilter] = useState([])

    const {open, toggleOpen} = useSearch()

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
        <MarketplaceSearchSidebar 
        open={open}
        toggleSearch={toggleOpen}
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
        <Navbar/>
        <Box bg='NavajoWhite' h='100%' w='100%' p={10} pt={20}>
            <Image src={getImage()} alt={'alternate'} width={500} height={600}/>
            {children}
        </Box>
        <SearchFloatingActionButton toggleSearchDrawer={toggleOpen}/>
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