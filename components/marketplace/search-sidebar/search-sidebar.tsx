import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  Text,
} from '@chakra-ui/react';
import type { CustomOption } from './search-sidebar-dropdown';
import { plantCustomAttributeValues, merchCustomAttributeValues, CustomAttributeValues } from '@/components/square-utils/customAttributeValueObject';
import SearchSidebarDropdown from './search-sidebar-dropdown';
interface SearchSidebarPropTypes {
  open: boolean;
  filters: any;
  toggleSearch: () => void;
  type: string

}


const SearchSidebar: React.FC<SearchSidebarPropTypes> = ({open, toggleSearch, filters, type}) => {
  //const [cartItems, setCartItems] = useState<Product[]>([]);
  

  return (
    <>
      <Drawer isOpen={open} onClose={toggleSearch} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Search</DrawerHeader>
            <DrawerBody>{

                contextAttributes().map((i, index) => {
                  return(
                    <VStack key={i.name}>
                      <Text>
                        {i.name}
                      </Text>
                      <SearchSidebarDropdown options={getSelectOptions(i.attributes)}/>
                    </VStack>
                    
                  )
                })
              
              }
              
              
            </DrawerBody>
            <DrawerFooter>
              <Button onClick={toggleSearch} colorScheme="blue" size="sm">
                close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );

  function contextAttributes(){
    if(type === 'merch'){
      return merchCustomAttributeValues

    } else {
      return plantCustomAttributeValues
    }
  }

  function getSelectOptions(attributes: any): CustomOption[]{

    return Object.entries<string>(attributes).map((i) => {
      return {
        label: i[1], 
        value: `${i[0]}:${i[1]}`
        }
      }
    )

  }
}

export default SearchSidebar;