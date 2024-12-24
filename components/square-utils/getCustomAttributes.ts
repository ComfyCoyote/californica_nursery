import type { Client } from "square";
import { AttributeSelectionMap } from "@/Interfaces/interfaces";
import { attributeSelectionMapping } from "./custom-attributes";
import { SelectOption, AttributeSelection } from "@/Interfaces/interfaces";

async function getCustomAttributes(client: Client){

    let attributeMapping: AttributeSelectionMap = {};

    //returns a list of square assigned 'custom attributes'
    const attributes = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ],
        
      });

    const selectionIdArr = Object.values(attributeSelectionMapping)

    attributes.result?.objects?.forEach((item) => {
        if(selectionIdArr.indexOf(item.id) !== -1){
            const options: SelectOption[] | undefined = [] 
            const checkOptions = item.customAttributeDefinitionData?.selectionConfig?.allowedSelections

            if(checkOptions){
                checkOptions.forEach((i) => {
                    const op = {id: i.uid, value: i.name} as SelectOption
                    options.push(op)
            })}

            const name = item.customAttributeDefinitionData?.name
            const attributeSelectionObj = {
                name: name,
                key: item.customAttributeDefinitionData?.key,
                selectionArr: options
            } as AttributeSelection

            switch(name){
                case "Flower Color":
                    attributeMapping['flowerColor'] = attributeSelectionObj
                    break;
                case "Dormancy":
                    attributeMapping['dormancy'] = attributeSelectionObj
                    break;
                case "Life Cycle":
                    attributeMapping['lifeCycle'] = attributeSelectionObj
                    break;
                case "Form":
                    attributeMapping['plantType'] = attributeSelectionObj
                    break;
                case "Soil Moisture":
                    attributeMapping['soilMoisture'] = attributeSelectionObj
                    break;
                case "Difficulty":
                    attributeMapping['difficulty'] = attributeSelectionObj
                    break;
                case "Sun":
                    attributeMapping['sun'] = attributeSelectionObj
                    break;
                case "Ecosystems":
                    attributeMapping['ecosystems'] = attributeSelectionObj
                    break;
                case "Growth Form":
                    attributeMapping['growthForm'] = attributeSelectionObj
                    break;

            }
                
            
        }
    })

    return attributeMapping;
}

export default getCustomAttributes