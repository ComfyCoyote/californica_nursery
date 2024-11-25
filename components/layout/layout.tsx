import ShoppingCart from "../marketplace/shoppingCartContext/shoppingCart";
import Footer from "./footer";
import Navbar from "./navbar";
import React, { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import NavbarMobile from "./navbar-mobile";

interface LayoutPropTypes {
    children: any
    
}

const Layout: React.FC<LayoutPropTypes> = ({children}) => {
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)

    const isMobile = useBreakpointValue({ base: true, md: false });

    console.log(isMobile)

    const toggleShoppingCart = () => {
        setShoppingCartOpen(!shoppingCartOpen)
    }

    return(
        <React.Fragment>
        {
            isMobile ? <NavbarMobile toggleShoppingCart={toggleShoppingCart}/> : <Navbar toggleShoppingCart={toggleShoppingCart}/>
        }
        <ShoppingCart 
            open={shoppingCartOpen}
            toggleCart={toggleShoppingCart}
        />
            <Box bgColor={"yellow"} width={'100%'}>
            {children}
            </Box>
        <Footer />
        </React.Fragment>

    )


}

export default Layout;