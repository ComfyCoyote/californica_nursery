import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useEffect, useState, useRef } from 'react';
import { PlantFilters, MerchFilters, SeedFilters } from './search-filters-interfaces';
import type { CatalogItemsQuery } from '@/components/square-utils/getCatalogItemsAPI';
import { useDisclosure } from '@chakra-ui/react';

interface SearchContextProps {
    open: boolean;
    toggleOpen: () => void
    addQuery: (att_id: string, selection_id: string) => void
    removeAttribute: (att_id:string) => void
    removeSelection: (att_id: string, selection_id: string) => void
    clearQuery: () => void
    search: (arg: boolean) => void
    searching: boolean
    query: CatalogItemsQuery[] | null
}

interface CartProviderProps {

    children: ReactJSXElement
}

const SearchContext = createContext<SearchContextProps>({
    open: false,
    removeAttribute: () => {},
    removeSelection: () => {},
    toggleOpen: () => {},
    addQuery: () => {},
    clearQuery: () => {},
    search: () => {},
    searching: false,
    query: []
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC <CartProviderProps>= (props) => {
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState(false)
  const [query, setQuery] = useState<CatalogItemsQuery[] | null>(null)

  const { isOpen, onClose, onOpen} = useDisclosure({isOpen: open, onClose: () => setOpen(false), onOpen: () => setOpen(true)})

  console.log(query)

  let filtersRef = useRef<any[]>([])

  const addQuery = (att_id: string, selection_id: string) => {
    if(att_id && selection_id){   

      if(query){
        
        let current = query

        const item = current.find(i => i.custom_attribute_definition_id === att_id)

        console.log(item)

        if(item){
          const index = current.indexOf(item)

          current[index] = {
            "custom_attribute_definition_id": att_id,
            "selection_uids_filter": [...item.selection_uids_filter, selection_id]
          }

        } else {

          const newAttribute: CatalogItemsQuery = {
            "custom_attribute_definition_id": att_id,
            "selection_uids_filter": [selection_id]
          }

          current = [...current, newAttribute]

        }

        console.log(current)
        
        setQuery([...current])

      } else {

       const newQuery = [
          {
            'custom_attribute_definition_id': att_id,
            'selection_uids_filter': [selection_id]
          }
        ]

        if(newQuery){
          setQuery(newQuery)
        }

      }
    }
    
  }

  const removeSelection = (att_id: string, selection_id: string) => {
    if(att_id && selection_id){
      let newQuery: CatalogItemsQuery[] = []
      
      query?.forEach((i) => {
        if(i.custom_attribute_definition_id === att_id){
          const current = i.selection_uids_filter
          const index = current.indexOf(selection_id)
          current.splice(index, 1)
          const update = {
            "custom_attribute_definition_id": att_id,
            "selection_uids_filter": [...current]
          }
          newQuery.push(update)
        } else {
          newQuery.push(i)
        }
      })

      if(newQuery){
        setQuery(newQuery)
      }

    }
  }

  const removeAttribute = (att_id: string) => {
    if(att_id){
      const newQuery = query?.filter((i) => {
        if(i.custom_attribute_definition_id !== att_id){
          return i
        }
      })

      if(newQuery){
        setQuery(newQuery)
      }
      
    }
  }

  const search = (arg: boolean) => {
    setSearching(arg)
    setOpen(false)

  }

  const clearQuery = () => {
    console.log('clearquery')
    setQuery([])
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <SearchContext.Provider value={{ open, search, searching, clearQuery, removeAttribute, removeSelection, toggleOpen, addQuery, query}}>
      {props.children}
    </SearchContext.Provider>
  );
};



