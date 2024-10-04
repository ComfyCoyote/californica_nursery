import ShoppingCart from "../marketplace/shoppingCartContext/shoppingCart";
import Footer from "./footer";
import Navbar from "./navbar";
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

interface LayoutPropTypes {
    children: any
    
}

const Layout: React.FC<LayoutPropTypes> = ({children}) => {

    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)

    const toggleShoppingCart = () => {
        setShoppingCartOpen(!shoppingCartOpen)
    }

    return(
        <React.Fragment>
        <Navbar toggleShoppingCart={toggleShoppingCart}/>
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