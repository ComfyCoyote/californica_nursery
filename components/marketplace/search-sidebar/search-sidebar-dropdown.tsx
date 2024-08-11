import React, { useEffect, useRef } from 'react';
import { Select } from '@chakra-ui/react';
import { SelectProps } from '@chakra-ui/react';
import { useSearch } from './search-sidebar-context';
import { MultiSelect } from 'chakra-multiselect';
import { useState } from 'react';


export interface CustomOption {
    value: string;
    label: string;
}

  
interface SearchSidebarDropdownProps extends SelectProps {
    att_id: string
    options: CustomOption[]
}

const SearchSidebarDropdown: React.FC<SearchSidebarDropdownProps> = ({ att_id, options }) => {
    const [value, setValue] = useState<string[]>([])
    
    const { addQuery, removeAttribute, removeSelection, query} = useSearch()

    useEffect(() => {
        const attribute = query?.find((i) => i.custom_attribute_definition_id === att_id)
        const selected = attribute?.selection_uids_filter.map((s) => {
            return options.find(i => i.value === s)?.label ?? ''
        })
        if(selected){
            setValue(selected)
        } else {
            setValue([])
        }
        
    }, [query])

    return (
        <MultiSelect
            options={options}
            value={value}
            onChange={(e, val) => handleChange(val)}
        />

    );


    function handleChange(action: any){
        console.log(action)
        if(action.action === "multiRemove"){
            const current = value
            const index = current.indexOf(action.value)
            current.splice(index, 1)
            
            
            if(current.length === 0){
                removeAttribute(att_id)
                setValue([...current])
               
            } else {
                const val = options.find(i => i.label === action.value)
                const id = val?.value ?? ''
                removeSelection(att_id, id)
                setValue([...current])
              
            }
            

        } else if(action.action === "multiClear"){

            
            removeAttribute(att_id)
            setValue([])
         

        }
        else {
            if(value.indexOf(action.value.label) === -1){
                
                addQuery(att_id, action.value.value)
                setValue([...value, action.value.label])
                
            }
            
        }
    }
};

export default SearchSidebarDropdown;
