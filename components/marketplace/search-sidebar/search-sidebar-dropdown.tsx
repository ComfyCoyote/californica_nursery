import React from 'react';
import { Select } from '@chakra-ui/react';
import { SelectProps } from '@chakra-ui/react';
import { useSearch } from './search-sidebar-context';
import type { QueryValue } from './search-sidebar-context';

export interface CustomOption {
    value: string;
    label: string;
}

  
interface SearchSidebarDropdownProps extends SelectProps {
  options: CustomOption[]
}

const SearchSidebarDropdown: React.FC<SearchSidebarDropdownProps> = ({ options }) => {

    const {addQuery} = useSearch()

    return (
        <Select 
            onChange={(e) => addQuery(e.target.value)}
        >
            {options.map((option) => (
                <option key={option.label} value={option.value}>
                {option.label}
                </option>
            ))}
        </Select>
    );
};

export default SearchSidebarDropdown;
