import React from 'react'
import { HStack, VStack } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import SearchSidebar from "./search-sidebar/search-sidebar"
import SearchFloatingActionButton from "../shared-components/search-fab"
import { useSearch } from "./search-sidebar/search-sidebar-context"
import { theme } from "@/theme/theme"
import { Text } from "@chakra-ui/react"
import Pagination from "../shared-components/pagination"


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

    return(
        <React.Fragment>
        <SearchSidebar 
        open={open}
        filters={filterOptions}
        toggleSearch={toggleOpen}
        />
        <Box bg={theme.palette.cream} h='100%' w='100%' p={10} pt={20}>
            <VStack spacing="auto" justify="center" p={5}>
                <Box bg={getColor(title)} overflow={'hidden'} width={'100vw'} height={55}>
                    <Text 
                        pt={2}
                        width={'100%'}
                        fontSize={30} 
                        fontWeight={700} 
                        animation="scrollText 15s linear infinite"
                        noOfLines={1}
                        sx={{
                            "@keyframes scrollText": {
                            from: { transform: "translateX(100%)" },
                            to: { transform: "translateX(-100%)" }
                            }
                    }}>
                        <HStack bg="green" spacing={20} display={'inline-block'} justifyContent={'space-between'} alignItems={'center'} h={'100%'}>

                            {
                                numbers.map((i) => {
                                    return (
                                        <Text>
                                            {title.toUpperCase()}
                                        </Text>
                                    )
                                })
                            }
                        </HStack>
                    </Text>
                </Box>
                <Text fontSize={25} fontWeight={600} p={10} color="black" textAlign={'center'}>
                    *Purchased plants, seeds, and merchandise are available for contactless pickup every Friday in Long Beach, CA.  For wholesale inquiries, contact californicanursery@gmail.com
                </Text>
            </VStack>
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