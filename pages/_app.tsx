import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/firebase/firebaseAuth'
import { CartProvider } from '@/components/marketplace/shoppingCartContext/shoppingCartContext'
import Footer from '@/components/footer'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    
    <CartProvider>
    <AuthProvider>
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
    </AuthProvider>
    </CartProvider>
  )
}

export default MyApp;
