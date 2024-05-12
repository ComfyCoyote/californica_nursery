import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { PlantFilters, MerchFilters, SeedFilters } from './search-filters-interfaces';
import { CustomOption } from '@/components/shared-components/search-dropdown';
import { filter } from '@chakra-ui/react';



interface SearchContextProps {
    open: boolean;
    filters: PlantFilters | MerchFilters | SeedFilters | null
    filterValues: string[] | null
    toggleOpen: () => void
    setPlantFilters: (body: any, attribute: string) => void
    setSeedFilters: (body: any, attribute: string) => void
    setMerchFilters: (body: any, attribute: string) => void
}

interface CartProviderProps {

    children: ReactJSXElement
}

const SearchContext = createContext<SearchContextProps>({
    open: false,
    filters: null,
    filterValues: null,
    toggleOpen: () => {},
    setPlantFilters: () => {},
    setSeedFilters: () => {},
    setMerchFilters: () => {}
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC <CartProviderProps>= (props) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<PlantFilters | MerchFilters | SeedFilters | null>(null)

  console.log(filters)

  let filtersRef = useRef<any[]>([])

  useEffect(() => {
    if(filters){
     filtersRef.current = Object.values(filters)
    }
  }, [filters])

  //this filter setter function gets passed directly to the dropdown component 'search-dropdown'
  const setPlantFilters = (body: any, key: string) => {
    const current: any = filters ? filters : {}
    const value = body.map((i: CustomOption) => (i.value))
    current[key] = value
    setFilters(current as PlantFilters)
  }

  const setMerchFilters = (body: any, key: string) => {
    const current: any = filters ? filters : {}
    const value = body.map((i: CustomOption) => (i.value))
    current[key] = value
    setFilters(current as MerchFilters)
  }

  const setSeedFilters = (body: any, key: string) => {
    const current: any = filters ? filters : {}
    const value = body.map((i: CustomOption) => (i.value))
    current[key] = value
    setFilters(current as SeedFilters)
  }


  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <SearchContext.Provider value={{ open, filters, filterValues: filtersRef.current, toggleOpen, setMerchFilters, setPlantFilters, setSeedFilters}}>
      {props.children}
    </SearchContext.Provider>
  );
};



