import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AuthProvider } from '@/firebase/firebaseAuth'
import { CartProvider } from '@/components/marketplace/shoppingCartContext/shoppingCartContext'
import { SearchProvider } from '@/components/marketplace/search-sidebar/search-sidebar-context'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import {  MultiSelectTheme } from 'chakra-multiselect'
import { components } from 'react-select'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const theme = extendTheme({
  components: {
    MultiSelect: MultiSelectTheme
  }
})


function MyApp({ Component, pageProps } : AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page)


  return (
    
    <CartProvider>
    <SearchProvider>
    <AuthProvider>
    <ChakraProvider theme={theme}>
     {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
    </AuthProvider>
    </SearchProvider>
    </CartProvider>
  )
}

export default MyApp;
