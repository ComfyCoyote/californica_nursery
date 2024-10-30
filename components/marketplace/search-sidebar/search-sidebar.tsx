import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Tab,
  TabPanel,
  Tabs,
  TabList,
  TabPanels,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSearch } from './search-sidebar-context';
import { theme } from '@/theme/theme';
import AttributeSearch from './attribute-search';
import SearchBar from './searchbar';

interface SearchSidebarPropTypes {
  open: boolean;
  filters: any;
  toggleSearch: () => void;
  type: string

}


const SearchSidebar: React.FC<SearchSidebarPropTypes> = ({type}) => {
 
  const { open, search, toggleOpen } = useSearch()

  const [tabIndex, setTabIndex] = useState<number>(0)
  
  return (
    <>
      <Drawer 
        isOpen={open}
        placement="right" 
        size="sm" 
        onClose={toggleOpen}
        >
        <DrawerOverlay>
          <DrawerContent
            bg={theme.palette.darkBrown}
            sx={{
              visibility: open ? 'visible' : 'hidden',
              position: 'fixed',
              transition: 'visibility 0.3s',
              
            }}>
            <DrawerCloseButton color={theme.palette.cream}/>
            <DrawerHeader color={theme.palette.cream}>Search</DrawerHeader>
            <DrawerBody>
              <Tabs variant='soft-rounded' colorScheme='yellow' onChange={(e) => setTabIndex(e)}>
                <TabList color={theme.palette.cream}>
                  <Tab color={theme.palette.cream}>{"Search by name"}</Tab>
                  <Tab color={theme.palette.cream}>{"Search by attributes"}</Tab>
                </TabList>
                <TabPanels>
                <TabPanel>
                    <SearchBar type={type}/>
                  </TabPanel>
                  <TabPanel>
                    <AttributeSearch type={type}/>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </DrawerBody>
            <DrawerFooter>
                <Button onClick={(e) => {console.log("search"); search(true, tabIndex)}} colorScheme={'yellow'} size="sm">
                  search
                </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );

  

  
}

export default SearchSidebar;