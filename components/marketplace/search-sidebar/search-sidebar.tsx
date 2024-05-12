import { useEffect, useState } from 'react';
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
  VStack,
  Text,
  useEditable,
} from '@chakra-ui/react';
import MultiSelectDropdown from '@/components/shared-components/search-dropdown';
import { CustomOption } from '@/components/shared-components/search-dropdown';
import { MultiValue } from 'react-select';
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { attributeSelectionMappingReverse } from '@/components/square-utils/custom-attributes';

interface SearchSidebarPropTypes {
  open: boolean;
  filters: any;
  toggleSearch: () => void;

}

interface FilterOptionsObject {
  [key: string]: string;
}

const attributeNames = ['Life Cycle', 'Dormancy', 'Life Cycle', 'Plant Types', 'Soil Moisture', 'Difficulty', 'Sun']



const SearchSidebar: React.FC<SearchSidebarPropTypes> = ({open, toggleSearch, filters}) => {
  //const [cartItems, setCartItems] = useState<Product[]>([]);
  

  return (
    <>
      <Drawer isOpen={open} onClose={toggleSearch} placement="right" size="sm">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Search</DrawerHeader>
            <DrawerBody>{

                filters && Object.keys(filters).map((i, index) => {
                  return(
                    <VStack key={i}>
                      <Text>
                        {attributeNames[index]}
                      </Text>
                      <MultiSelectDropdown options={filters[i]} attribute={i}/>
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


  async function getCustomAttributes(){
      const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    try {
      const response = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ]
      });
    
      const ids = Object.keys(attributeSelectionMappingReverse)
      const objects = response.result.objects
      let filterOptionsObject: any;

      objects?.forEach((i) => {
        if(ids.indexOf(i.id) !== -1){
          const options = i.customAttributeDefinitionData?.selectionConfig?.allowedSelections?.map((q) =>  { return({value: q.name, label : q.name} as CustomOption)});
          const name = attributeSelectionMappingReverse[i.id]
          filterOptionsObject[name] = options 
        }
      })


      return await filterOptionsObject as FilterOptionsObject


    } catch(error) {
      console.log(error);
    }
    }
}

export default SearchSidebar;