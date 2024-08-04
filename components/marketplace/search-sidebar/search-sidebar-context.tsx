import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { PlantFilters, MerchFilters, SeedFilters } from './search-filters-interfaces';
import { type } from 'os';

export interface QueryValue {
  [key: string] : string

  "custom_attribute_definition_id": string,
  "string_filter": string
}


interface SearchContextProps {
    open: boolean;
    filters: PlantFilters | MerchFilters | SeedFilters | null
    filterValues: string[] | null
    toggleOpen: () => void
    addQuery: (value: any) => void
    query: any[]
}

interface CartProviderProps {

    children: ReactJSXElement
}

const SearchContext = createContext<SearchContextProps>({
    open: false,
    filters: null,
    filterValues: null,
    toggleOpen: () => {},
    addQuery: () => {},
    query: []
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC <CartProviderProps>= (props) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<PlantFilters | MerchFilters | SeedFilters | null>(null)
  const [query, setQuery] = useState<any>({})

  console.log(query)

  let filtersRef = useRef<any[]>([])

  useEffect(() => {
    if(filters){
     filtersRef.current = Object.values(filters)
    }
  }, [filters])

  const addQuery = (value: any) => {
    if(value){
      const [id, val] = value.split(":")
      const newQuery = query
      newQuery[id] = val
      setQuery(newQuery)
    }
    
  }

  const searchItems = ()  => {

  }


  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <SearchContext.Provider value={{ open, filters, filterValues: filtersRef.current, toggleOpen, addQuery, query}}>
      {props.children}
    </SearchContext.Provider>
  );
};



