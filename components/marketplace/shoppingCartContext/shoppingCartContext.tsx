import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useState, useEffect } from 'react';
import { Apparel, Product, Plant, OrderItem } from '@/Interfaces/interfaces';
import {v4 as uuidv4} from 'uuid'
import type { Fulfillment, Order, OrderLineItem} from 'square';
import dayjs from 'dayjs';
import axios from 'axios';


interface CartContextProps {
  orderItems: OrderItem[];
  calculated: string | undefined;
  addToCart: (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | Product, orderItem: OrderItem) => void;
  removeFromCart: (event: React.MouseEvent<HTMLButtonElement>, orderId: string) => void;
  subtractItem: (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | Product, orderItem: OrderItem) => void;
  addItem: (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | Product, orderItem: OrderItem) => void;
  updateItemQuantity: (event: React.ChangeEvent<HTMLInputElement>, itemId: string) => void;
}

interface CartProviderProps {

    children: ReactJSXElement
}

const CartContext = createContext<CartContextProps>({
  orderItems: [],
  calculated: '',
  addToCart: () => {},
  updateItemQuantity: () => {},
  removeFromCart: () => {},
  addItem: () => {},
  subtractItem: () => {},
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC <CartProviderProps>= (props) => {
  const [cartItems, setCartItems] = useState<Array<Plant | Apparel | Product | undefined>>([]);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [calculated, setCalculated] = useState<string>()


  useEffect(() => {
    const localItems = sessionStorage.getItem("orderItems")
    if(localItems){
      const obj = JSON.parse(localItems)
      setOrderItems(obj)
      
    }
  }, [])

  useEffect(() => {


    if(orderItems.length > 0){
      const localItems = JSON.stringify(orderItems)
      sessionStorage.setItem("orderItems", localItems)
      sessionStorage.setItem("calculated", JSON.stringify(calculated))
      calculateOrder().then((response) => {setCalculated(response.data.net)})
    }

  }, [orderItems])

  const addToCart = (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | Product, orderItem: OrderItem) => {
    if(cartItems.indexOf(product) === -1 && orderItems.indexOf(orderItem) === -1){
      setCartItems((prevItems) => [...prevItems, product]);
      setOrderItems((prev) => [...prev, orderItem])
    }
    
  };

  const removeFromCart = (event: React.MouseEvent<HTMLButtonElement>, orderId: string) => {
   
    setOrderItems((prev) => prev.filter((item: OrderItem) => item.catalogObjectId !== orderId));

  };

  const subtractItem = (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | Product | undefined, orderItem: OrderItem) => {
    let index = cartItems.indexOf(product);
    const newArray = [...cartItems]
    newArray.splice(index, 1); 
    
    const orderArray = [...orderItems]
    orderArray.splice(index, 1)

    setOrderItems(orderArray)
    setCartItems(newArray);
  }

  const addItem = (event: React.MouseEvent<HTMLButtonElement>, product: Plant | Apparel | Product | undefined, orderItem: OrderItem) => {
    const newArray = [...cartItems, product]
    const orderArray = [...orderItems, orderItem]

    setOrderItems(orderArray)
    setCartItems(newArray)
  }

  const updateItemQuantity = (event: React.ChangeEvent<HTMLInputElement>, itemId: string) => {
    const newQuantity = event.target.value;

    if(newQuantity){
      const updatedItems: OrderItem[] = orderItems.map((item: OrderItem) => {
        if(item.catalogObjectId === itemId){
          const newItem = item
          newItem.quantity = newQuantity
          return newItem as OrderItem
        } else {
          return item
        }
      })
  
      setOrderItems(updatedItems)

    }

  }

  const createPickupFulfillment = (name: string, email: string, phone: string, note: string) => {
    const date = dayjs()
    const expires = date.add(1, 'day')
    const pickup = date.add(1, 'hour')

    const fulfillment = {
      type: 'PICKUP',
      state: 'PROPOSED',
      pickupDetails: {
        recipient: {
          displayName: name,
          emailAddress: email,
          phoneNumber: phone
        },
        expiresAt: expires.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'), //get expiration time
        scheduleType: 'SCHEDULED',
        pickupAt: pickup.format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'), //get pickup time
        note: note
      }
    } as Fulfillment

    return fulfillment
    
  }


  const createOrder = async (lineItems: OrderLineItem[], fulfillments: Fulfillment[], locationId: string) => {


    const order = {
      order: {
        locationId: locationId,
        lineItems: lineItems,
        fulfillments: fulfillments
      },
      idempotencyKey: uuidv4(),
    }
  
    return order
    
  }

  const calculateOrder = async () => {

    const name = "Muzzammil Adamjee"
    const email = "muzzadamjee@gmail.com"
    const phone = "3107365643"
    const note = "This is muzzy's test purchase"

    const fulfillment = createPickupFulfillment(name, email, phone, note)

    const stJosephs = 'L3C4J69QTRCAA'

    const lineItems: OrderLineItem[] = orderItems.map((item : OrderItem) => {

      const line = {
        'quantity': item.quantity,
        'appliedTaxes': item.appliedTaxes,
        'appliedDiscounts': item.appliedDiscounts,
        'catalogObjectId': item.catalogObjectId
      } as OrderLineItem

      return line
    })

    const order = await createOrder(lineItems, [fulfillment], stJosephs)

    const response = await axios.post('/api/calculateOrder', order)

    console.log(response)

    return response
  }

  return (
    <CartContext.Provider value={{ calculated, updateItemQuantity, addToCart, removeFromCart, subtractItem, addItem, orderItems}}>
      {props.children}
    </CartContext.Provider>
  );
};


