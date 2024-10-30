import { Input, InputGroup, InputLeftElement, Icon, Box } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useSearch } from './search-sidebar-context';
import { theme } from '@/theme/theme';

interface SearchBarPropTypes {
    type: string
}


const SearchBar: React.FC<SearchBarPropTypes> = ({type}) => {
 
    const { textQuery, textSearch, search } = useSearch()

    return (
        <Box width="100%" maxW="400px" mx="auto">
        <InputGroup>
            <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.400" />
            </InputLeftElement>
            <Input
            type="text"
            color={theme.palette.cream}
            value={textQuery}
            onChange={(e) => textSearch(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  search(true, 0); // Call the onSearch function when Enter is pressed
                }
              }}
            placeholder={placeholder()}
            variant="filled"
            bg={theme.palette.darkBrown}
            _focus={{ borderColor: 'blue.400' }}
            />
        </InputGroup>
        </Box>
    );

    function placeholder(){
        if(type === 'merch'){
            return 'Search a merchandise item'
        }else if(type === 'plants'){
            return 'Search a specific plant'
        }else if(type === 'seeds'){
            return "Search a seeds item"
        }

        return ''
    }
};

export default SearchBar;








