import { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
import MultiSelectDropdown from '@/components/shared-components/search-dropdown';
import { CustomOption } from '@/components/shared-components/search-dropdown';
import { MultiValue } from 'react-select';

interface SearchSidebarPropTypes {
  open: boolean;
  toggleSearch: () => void;
  setOption: (filter: MultiValue<CustomOption>) => void;

}

const SearchSidebar: React.FC<SearchSidebarPropTypes> = ({open, toggleSearch, setOption}) => {
  //const [cartItems, setCartItems] = useState<Product[]>([]);

  const testOptions: CustomOption[] = ['0', '1', '2', '3'].map((i) => { return({value: i, label: i} as CustomOption)})

  return (
    <>
      <Drawer isOpen={open} onClose={toggleSearch} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Shopping Cart</DrawerHeader>
            <DrawerBody>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
              <MultiSelectDropdown options={testOptions} setState={setOption}/>
            </DrawerBody>
            <DrawerFooter>
              <Button colorScheme="blue" size="sm">
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

export default SearchSidebar;