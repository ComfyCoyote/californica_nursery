import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/firebase/firebaseAuth'
import { CartProvider } from '@/shoppingCartContext/shoppingCartContext'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    
    <CartProvider>
    <AuthProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </AuthProvider>
    </CartProvider>
  )
}

export default MyApp;
