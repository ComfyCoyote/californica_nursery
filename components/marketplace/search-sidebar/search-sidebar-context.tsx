import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createContext, useContext, useState } from 'react';
import type { CatalogItemsQuery } from '@/components/square-utils/square-api-wrappers/getCatalogItemsAPI';

interface SearchBehaviour {
  action: number,
  search: boolean
}

interface SearchContextProps {
    open: boolean;
    toggleOpen: () => void
    addQuery: (att_id: string, selection_id: string) => void
    removeAttribute: (att_id:string) => void
    removeSelection: (att_id: string, selection_id: string) => void
    clearQuery: () => void
    textSearch: (input: string) => void 
    textQuery: string
    search: (arg: boolean, index: number) => void
    searching: SearchBehaviour
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
    textSearch: () => {},
    textQuery: '',
    search: () => {},
    searching: {search: false, action: 0},
    query: []
});

export const useSearch = () => useContext(SearchContext);

export const SearchProvider: React.FC <CartProviderProps>= (props) => {
  const [open, setOpen] = useState(false);
  const [searching, setSearching] = useState<SearchBehaviour>({search: false, action: 0})
  const [query, setQuery] = useState<CatalogItemsQuery[] | null>(null)
  const [textQuery, setTextQuery] = useState<string>('')

  console.log(searching)

  const addQuery = (att_id: string, selection_id: string) => {
    if(att_id && selection_id){   

      if(query){
        
        let current = query

        const item = current.find(i => i.custom_attribute_definition_id === att_id)

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

  const textSearch = (input: string) => {
    setTextQuery(input)

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

  const search = (arg: boolean, index: number) => {
    console.log(arg)
    console.log(index)
    if(index === 0 || index === 1){
      setSearching({search: arg, action: index})
    }
    
    setOpen(false)

  }

  const clearQuery = () => {
    setQuery([])
  }

  const toggleOpen = () => {
    setOpen(!open)
  }

  return (
    <SearchContext.Provider value={{ open, search, searching, textQuery, clearQuery, textSearch, removeAttribute, removeSelection, toggleOpen, addQuery, query}}>
      {props.children}
    </SearchContext.Provider>
  );
};



