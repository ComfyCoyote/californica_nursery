import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/firebase/firebaseAuth'
import { CartProvider } from '@/components/marketplace/shoppingCartContext/shoppingCartContext'
import Footer from '@/components/layout/footer'
import { SearchProvider } from '@/components/marketplace/search-sidebar/search-sidebar-context'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps } : AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)


  return (
    
    <CartProvider>
    <SearchProvider>
    <AuthProvider>
    <ChakraProvider>
     {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
    </AuthProvider>
    </SearchProvider>
    </CartProvider>
  )
}

export default MyApp;
