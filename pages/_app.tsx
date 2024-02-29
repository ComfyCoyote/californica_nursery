import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/firebase/firebaseAuth'
import { CartProvider } from '@/components/marketplace/shoppingCartContext/shoppingCartContext'
import Footer from '@/components/footer'
import { SearchProvider } from '@/components/marketplace/search-sidebar/search-sidebar-context'

function MyApp({ Component, pageProps } : AppProps) {
  return (
    
    <CartProvider>
    <SearchProvider>
    <AuthProvider>
    <ChakraProvider>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
    </AuthProvider>
    </SearchProvider>
    </CartProvider>
  )
}

export default MyApp;
