import type { Client as ClientType } from "square";
import { Environment, Client } from "square";
import { attributeSelectionMappingReverse } from "./custom-attributes";
import { CustomOption } from "../marketplace/search-sidebar/search-sidebar-dropdown";


async function getFilterOptions(client: ClientType){

    let filterOptionsObject: any = {}

    //returns a list of square assigned 'custom attributes'
    const attributes = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ],
        
      });


    const ids = Object.keys(attributeSelectionMappingReverse)
    const objects = attributes.result.objects
    

    objects?.forEach((i) => {
        //if the object id is found in our list of attribute id's
      if(ids.indexOf(i.id) !== -1){
        //create a list of objects of type CustomOption which is a possible value for a custom attribute, this is used for giving options for the filter tab
        const options = i.customAttributeDefinitionData?.selectionConfig?.allowedSelections?.map((q) =>  { return({value: q.name, label : q.name} as CustomOption)});
        //give a possible option to search for all of a certain custom attribute
        options?.push({value: 'all', label: 'All'})
        //get the name of the attribute by indexing by id
        const name = attributeSelectionMappingReverse[i.id]
        //assign the filterOptionsObject with that name and the list of options it can be queried for
        //the filterOptionsObject will be returned and form the basis of the filter tab
        filterOptionsObject[name] = options 
      }
    })

    return filterOptionsObject

}



export default getFilterOptions