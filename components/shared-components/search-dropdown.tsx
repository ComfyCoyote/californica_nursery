// Import necessary Chakra UI components and styles
import { ChakraProvider, CSSReset, Box, VStack } from '@chakra-ui/react';
import Select from 'react-select';
import { useSearch } from '../marketplace/search-sidebar/search-sidebar-context';
import { useState } from 'react';


export interface CustomOption {
  value: string;
  label: string;
}

interface MultiSelectDropdownPropTypes {
    options: CustomOption[];
    attribute: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownPropTypes> = ({options, attribute}) => {

  const [selected, setSelected] = useState<CustomOption[]>([])

  const {setPlantFilters, filters} = useSearch()

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        {/* Use the react-select component with Chakra UI styling */}
        <VStack spacing={4}>
          <Select
            placeholder="Select multiple options"
            value={getValue()}
            isMulti
            options={options}
            onChange={(val, action) => {setPlantFilters(val, attribute); localSelected(val);} }
            styles={{
              control: (styles) => ({
                ...styles,
                borderRadius: 'md',
                borderColor: 'gray.300',
              }),
              menu: (styles) => ({
                ...styles,
                borderRadius: 'md',
                borderColor: 'gray.300',
              }),
            }}
          />
        </VStack>
      </Box>
    </ChakraProvider>
  );

  function localSelected(val: any){
    if(selected.indexOf(val) === -1){
      const arr = val.map((i: any) => i as CustomOption)
      setSelected(arr)
    } 

  }

  function getValue(){
    if(filters){
      const sel = filters[attribute]
      if(sel){
        if(sel.length > 0){
          let values: CustomOption[] = []
          options.forEach(i => sel.indexOf(i.value) !== -1 && values.push(i))
          return values
        }
      } else {
        return selected
      }
    }
  }

  
};

export default MultiSelectDropdown;
