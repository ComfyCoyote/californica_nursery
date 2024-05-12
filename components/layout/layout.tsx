import ShoppingCart from "../marketplace/shoppingCartContext/shoppingCart";
import Footer from "./footer";
import Navbar from "./navbar";
import React, { useState } from "react";

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
            toggleCart={toggleShoppingCart}/>
            {children}
        <Footer />
        </React.Fragment>

    )


}

export default Layout;