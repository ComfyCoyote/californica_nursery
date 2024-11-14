import React, { useEffect } from 'react'
import { HStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import SearchSidebar from "./search-sidebar/search-sidebar"
import { useSearch } from "./search-sidebar/search-sidebar-context"
import { theme } from "@/theme/theme"
import { Text } from "@chakra-ui/react"
import ThankYouModal from '../shared-components/thank-you-modal'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface MarketplacePropTypes{
    children: any
    title: string;
    filterOptions: any;
    
}

const length = 10;
const numbers = Array.from({ length }, (_, i) => i + 1);

//make plants banner continuous


const Marketplace: React.FC<MarketplacePropTypes>= ({children, title, filterOptions}) => {

    const {open, toggleOpen} = useSearch()
    const router = useRouter()

    const [modal, setModal] = useState(false)

    const { query } = useRouter()

    useEffect(() => {
        if(query.fromcheckout === 'true'){
            setModal(true)
        }
        
    }, [])

    useEffect(() => {
        const savedPosition = sessionStorage.getItem(router.pathname);

        if (savedPosition) {
          window.scrollTo(0, parseInt(savedPosition, 10));
        }
    
        // Save scroll position before navigating away
        const handleRouteChange = () => {
          sessionStorage.setItem(router.pathname, window.scrollY.toString());
        };
    
        // Listen to route changes
        router.events.on('routeChangeStart', handleRouteChange);

        return () => {
          router.events.off('routeChangeStart', handleRouteChange);
        };
        
    }, [router])


    return(
        <React.Fragment>
        <ThankYouModal isOpen={modal} onClose={() => setModal(false)}/>
        <SearchSidebar 
        open={open}
        filters={filterOptions}
        toggleSearch={toggleOpen}
        type={title}
        />
        <Box 
            bg={theme.palette.cream} 
            h='100%' 
            w={'100%'} 
            pt={{base: 160, md: 105}}
        >
                <Box bg={getColor(title)} overflow={'hidden'} width={'100%'} height={55}>
                        <HStack 
                            animation="scrollText 15s linear infinite" 
                            overflow={'hidden'}
                            whiteSpace={'nowrap'}
                            spacing={20} 
                            display={'inline-flex'} 
                            justifyContent={'space-between'} 
                            alignItems={'center'} 
                            w={'2000px'}
                            h={'100%'}
                            sx={{
                                "@keyframes scrollText": 
                                {
                                    from: { transform: "translateX(100%)" },
                                    to: { transform: "translateX(-100%)" }
                                }
                            }}
                            >
                                <Text  
                                    pt={2}
                                    width={'100%'}
                                    fontSize={30} 
                                    fontWeight={700} 
                                >
                                    {title.toUpperCase()}
                                </Text>
                                <Text  
                                    pt={2}
                                    width={'100%'}
                                    fontSize={30} 
                                    fontWeight={700} 
                                >
                                    {title.toUpperCase()}
                                </Text>
                                <Text  pt={2}
                                    width={'100%'}
                                    fontSize={30} 
                                    fontWeight={700} 
                                >
                                    {title.toUpperCase()}
                                </Text>
                                <Text  pt={2}
                                    width={'100%'}
                                    fontSize={30} 
                                    fontWeight={700} 
                                >
                                    {title.toUpperCase()}
                                </Text>
                                <Text  pt={2}
                                    width={'100%'}
                                    fontSize={30} 
                                    fontWeight={700} 
                                >
                                    {title.toUpperCase()}
                                </Text>
                                <Text  pt={2}
                                    width={'100%'}
                                    fontSize={30} 
                                    fontWeight={700} 
                                >
                                    {title.toUpperCase()}
                                </Text>
                        </HStack>
                </Box>
                <Text fontSize={25} fontWeight={600} p={10} color="black" textAlign={'center'}>
                    *Purchased plants, seeds, and merchandise are available for contactless pickup every Friday in Long Beach, CA.  For wholesale inquiries, contact californicanursery@gmail.com
                </Text>
            {children}
        </Box>
        {/*<SearchFloatingActionButton toggleSearchDrawer={toggleOpen}/>*/}
        </React.Fragment>

    )

    function getColor(type: string){
        switch(type){
          case 'plants':
            return theme.palette.lime
          case 'seeds':
            return theme.palette.skyBlue
          case 'merch':
            return theme.palette.purple
        }
      }

    function getBanner(){
        const arr = numbers.map((i) => {
            return title.toUpperCase()
                
        })

        return arr.join('')
    }

}


export default Marketplace;