'use client'

import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useState } from 'react';
import { PlantFilters, MerchFilters, SeedFilters } from './search-filters-interfaces';



interface SearchContextProps {
    open: boolean;
    filters: PlantFilters | MerchFilters | SeedFilters | null
    toggleOpen: () => void
    setPlantFilters: (body: PlantFilters) => void
    setSeedFilters: (body: SeedFilters) => void
    setMerchFilters: (body: MerchFilters) => void
}

interface CartProviderProps {

    children: ReactJSXElement
}

const SearchContext = createContext<SearchContextProps>({
    open: false,
    filters: null,
    toggleOpen: () => {},
    setPlantFilters: () => {},
    setSeedFilters: () => {},
    setMerchFilters: () => {}
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC <CartProviderProps>= (props) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<PlantFilters | MerchFilters | SeedFilters | null>(null)

  const setPlantFilters = (body: PlantFilters) => {
    setFilters(body)
  }

  const setMerchFilters = (body: MerchFilters) => {
    setFilters(body)
  }

  const setSeedFilters = (body: SeedFilters) => {
    setFilters(body)
  }


  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <SearchContext.Provider value={{ open, filters, toggleOpen, setMerchFilters, setPlantFilters, setSeedFilters}}>
      {props.children}
    </SearchContext.Provider>
  );
};



