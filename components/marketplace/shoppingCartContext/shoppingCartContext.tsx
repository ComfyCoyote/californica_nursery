'use client'

import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useState } from 'react';
import { Apparel, PlaidProduct, Plant } from '@/Interfaces/interfaces';

interface CartContextProps {
  cartItems: Array<Plant | Apparel | PlaidProduct>;
  addToCart: (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel) => void;
  removeFromCart: (event: React.MouseEvent<HTMLButtonElement>, productId: string) => void;
  subtractItem: (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel) => void;
  addItem: (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel) => void;
}

interface CartProviderProps {

    children: ReactJSXElement
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  addItem: () => {},
  subtractItem: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC <CartProviderProps>= (props) => {
  const [cartItems, setCartItems] = useState<Array<Plant | Apparel | PlaidProduct>>([]);

  console.log(cartItems)


  const addToCart = (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | PlaidProduct) => {
    console.log(product)
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (event: React.MouseEvent<HTMLButtonElement>, productId: string | undefined) => {
    setCartItems((prevItems) => prevItems.filter((item: Plant | Apparel | PlaidProduct) => item.id !== productId));
  };

  const subtractItem = (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | PlaidProduct) => {
    let index = cartItems.indexOf(product);
    const newArray = [...cartItems]
    newArray.splice(index, 1); 
   
    setCartItems(newArray);
  }

  const addItem = (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | PlaidProduct) => {
    const newArray = [...cartItems, product]
    setCartItems(newArray)
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, subtractItem, addItem}}>
      {props.children}
    </CartContext.Provider>
  );
};



