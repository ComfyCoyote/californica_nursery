import { PriceVariation, Plant } from "@/Interfaces/interfaces"
import { PlantAttributes } from "@/Interfaces/interfaces"
import { plantCustomAttributeValues } from "../customAttributeValueObject"

//This function constructs a Plant object by calling a series of square api's which gather
//all relevant data for the Plant to function in the marketplace


async function constructPlant(item: any, priceVaritions: any[] | undefined, imageIds: any[] | undefined){


        //from the catalogobject's priceVariation, contruct a PriceVariation object which contains simplified
        //key value pairs and includes the inventory count for that item variation
        

        let priceVariation = priceVaritions?.map(
            (inventory: any) => {

                let amount: string | null | undefined = "0"

                if(inventory){
                    if(inventory?.quantity){
                        if(Number(inventory?.quantity) > 0){
                            amount = inventory?.quantity
                        }
                        
                    }
                }
                
                const i = item?.item_data?.variations.filter((i: any) => i.id === inventory.catalogObjectId)

                return {
                    'id': i[0].id,
                    'price' :  i[0].item_variation_data?.price_money?.amount?.toString() ?? null,
                    'type' :  i[0].item_variation_data?.name,
                    'amount': amount 
                } as PriceVariation

            }
        )


        if(!priceVariation){
            priceVariation = [
                {
                    'id': '0',
                    'price': '0',
                    'type': 'none',
                    'amount': '0'
                } as PriceVariation
            ]
        }


        //check to see if the item has customAttributeValues. if so, then create a PlantAttributesAsArray object which
        //maps the specific attributes to the item and assigns it to the key "plantAttributes"
        const customAttributeValues = item.custom_attribute_values
        
        const plantAttributes: PlantAttributes = {
            "soilMoisture": [],
            "plantType": [],
            "difficulty": [],
            "dormancy": [],
            "growthRate": [],
            "flowerColor": [],
            "ecosystems": [],
            "lifeCycle": [],
            "sun": [],
            "growthForm": []
        }

        //if the item has custom attributes defined
        if(customAttributeValues){
            //for each item in local custom_attribute_values array
            plantCustomAttributeValues.forEach((val) => {
                //check to see if the item has a custom attribute for the item in our local array, return the object
                const customAttribute = customAttributeValues[val["id"]]
                
                if(customAttribute){
                    plantAttributes[val["name"]] = customAttribute.selection_uid_values.map((i: string) => { return val["attributes"][i]}) 
                }

            })

        }

        //get the image urls for each id listed in the CatalogObjects images key and append them to the images
        //key of the plant object

        let imageUrls: string[] = []

        if(imageIds){

            imageUrls = imageIds.map((i: any) => i.imageData?.url)
            
        }
        

        
        const plant: Plant = {
            id: item.id,
            name : item?.item_data?.name ? item?.item_data?.name : '',
            description: item?.item_data?.description ? item?.item_data?.description : '',
            imageUrls: imageUrls,
            price: priceVariation,
            plantAttributes: plantAttributes
        }

        return plant


        

    }


export default constructPlant;
