import { getImageURL, queryFirestorePlants } from "@/firebase/firebaseFunctions"
import MarketplaceDrawer from "@/components/marketplace-drawer"
import React from 'react'
import Navbar from "@/components/layout/navbar"
import { useCart } from "@/components/marketplace/shoppingCartContext/shoppingCartContext"
import { Grid, VStack } from "@chakra-ui/react"
import ProductCardArray from "./product-display/product-card-array"
import { Box, Flex} from "@chakra-ui/react"
import { useState } from "react"
import ShoppingCart from "./shoppingCartContext/shoppingCart"
import SearchSidebar from "./search-sidebar/search-sidebar"
import FloatingActionButton from "../shared-components/cart-fab"
import Image from "next/image"
import SearchFloatingActionButton from "../shared-components/search-fab"
import { CustomOption } from "../shared-components/search-dropdown" 
import { MultiValue } from 'react-select';
import { useSearch } from "./search-sidebar/search-sidebar-context"
import { theme } from "@/theme/theme"
import { Text } from "@chakra-ui/react"


interface MarketplacePropTypes{
    children: any
    title: string;
    filterOptions: any;
    
}

//make plants banner continuous


const Marketplace: React.FC<MarketplacePropTypes>= ({children, title, filterOptions}) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)

    const {open, toggleOpen, filters} = useSearch()

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
        <SearchSidebar 
        open={open}
        filters={filterOptions}
        toggleSearch={toggleOpen}
        />
        <Box bg={theme.palette.cream} h='100%' w='100%' p={10} pt={20}>
            <VStack spacing="auto" justify="center" p={5}>
                <Box bg={theme.palette.lime} width={'100vw'} height={55}>
                    <Text 
                        pt={2}
                        width={'100vw'}
                        fontSize={30} 
                        fontWeight={700} 
                        animation="scrollText 15s linear infinite"
                        noOfLines={1}
                        sx={{
                            "@keyframes scrollText": {
                            from: { transform: "translateX(100%)" },
                            to: { transform: "translateX(-100%)" }
                            }
                    }}>
                        <Flex justifyContent={'space-between'} alignItems={'center'} w={'100vw'} h={'100%'}>
                            <Text>
                                {title.toUpperCase()}
                            </Text>
                            <Text>
                                {title.toUpperCase()}
                            </Text>
                            <Text>
                                {title.toUpperCase()}
                            </Text>
                            <Text>
                                {title.toUpperCase()}
                            </Text>
                            <Text>
                                {title.toUpperCase()}
                            </Text>
                            <Text>
                                {title.toUpperCase()}
                            </Text>
                        </Flex>
                    </Text>
                </Box>
                <Text fontSize={25} fontWeight={600} p={10} color="black" textAlign={'center'}>
                    *Purchased plants, seeds, and merchandise are available for contactless pickup every Friday in Long Beach, CA.  For wholesale inquiries, contact californicanursery@gmail.com
                </Text>
            </VStack>
            {children}
        </Box>
        <SearchFloatingActionButton toggleSearchDrawer={toggleOpen}/>
        </React.Fragment>

    )

    function getBanner(): string{
        const spaces = '          '
        const upper = title.toUpperCase()
        const spaced = upper + spaces
        const banner = [0,1,2].map((i) => (spaced)).join(' ')

        console.log(banner)

        return banner
    }

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

        <ShoppingCart 
            open={shoppingCartOpen}
            toggleCart={toggleShoppingCart}/>
        <MarketplaceDrawer 
            isDrawerOpen={isDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleDrawerOpen={handleDrawerOpen}
        />
        <Navbar toggleShoppingCart={toggleShoppingCart} />
*/

export default Marketplace;