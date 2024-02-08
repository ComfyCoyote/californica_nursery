// Import necessary Chakra UI components and styles
import { ChakraProvider, CSSReset, Box, VStack } from '@chakra-ui/react';
import Select, { MultiValue } from 'react-select';

export interface CustomOption {
  value: string;
  label: string;
}

interface MultiSelectDropdownPropTypes {
    options: CustomOption[];
    setState: (filter: MultiValue<CustomOption>) => void
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownPropTypes> = ({options, setState}) => {
  // Sample options data

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        {/* Use the react-select component with Chakra UI styling */}
        <VStack spacing={4}>
          <Select
            placeholder="Select multiple options"
            isMulti
            options={options}
            onChange={(newValue) => setState(newValue)}
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
};

export default MultiSelectDropdown;
