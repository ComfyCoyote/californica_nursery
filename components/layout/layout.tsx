import ShoppingCart from "../marketplace/shoppingCartContext/shoppingCart";
import Footer from "./footer";
import Navbar from "./navbar";
import React, { useEffect, useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import NavbarMobile from "./navbar-mobile";
import ThankYouModal from "../shared-components/thank-you-modal";

interface LayoutPropTypes {
    children: any
    
}

const Layout: React.FC<LayoutPropTypes> = ({children}) => {
    const [shoppingCartOpen, setShoppingCartOpen] = useState(false)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        if(sessionStorage.getItem("fromCheckout") === '1'){
            setModal(true)
        }
        
    }, [])

    const isMobile = useBreakpointValue({ base: true, md: false });


    const toggleShoppingCart = () => {
        setShoppingCartOpen(!shoppingCartOpen)
    }

    return(
        <React.Fragment>
        {
            isMobile ? <NavbarMobile toggleShoppingCart={toggleShoppingCart}/> : <Navbar toggleShoppingCart={toggleShoppingCart}/>
        }
        <ThankYouModal isOpen={modal} onClose={() => { sessionStorage.setItem("fromCheckout", '0'); setModal(false)}}/>
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