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
import { plantCustomAttributeValues, merchCustomAttributeValues } from '@/components/square-utils/customAttributeValueObject';
import SearchSidebarDropdown from './search-sidebar-dropdown';
import { useSearch } from './search-sidebar-context';

interface SearchSidebarPropTypes {
  open: boolean;
  filters: any;
  toggleSearch: () => void;
  type: string

}

interface AttributeTitle {
  [key: string]: any;
}

const attributes: AttributeTitle = {
  'flowerColor': 'Flower Color',
  'dormancy': 'Dormancy',
  'lifeCycle': 'Life Cycle',
  'plantType': 'Plant Type',
  'soilMoisture': 'Soil Moisture',
  'difficulty': 'Difficulty',
  'sun': 'Sun',
  'ecosystem': 'Ecosystem',
  'growthForm': 'Growth Form'
}





const SearchSidebar: React.FC<SearchSidebarPropTypes> = ({type}) => {
 
  const { open, search, toggleOpen } = useSearch()

  
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
            sx={{
              visibility: open ? 'visible' : 'hidden',
              position: 'fixed',
              transition: 'visibility 0.3s',
            }}>
            <DrawerCloseButton />
            <DrawerHeader>Search</DrawerHeader>
            <DrawerBody>
              {

                contextAttributes().map((i, index) => {
                  return(
                    <VStack
                      alignItems={'flex-start'}
                      spacing={3} 
                      key={i.name}>
                      <Text fontWeight={600}>
                        {attributes[i.name]}
                      </Text>
                      <SearchSidebarDropdown att_id={i.att_id} options={getSelectOptions(i.attributes)}/>
                    </VStack>
                    
                  )
                })
              
              }
            </DrawerBody>
            <DrawerFooter>
                <Button onClick={(e) => search(true)} colorScheme={'yellow'} size="sm">
                  search
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
        value: i[0]
        }
      }
    )

  }
}

export default SearchSidebar;