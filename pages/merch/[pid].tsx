import { Client, Environment, ApiError} from "square";
import { GetServerSideProps } from "next";
import { Plant, PriceVariation, SelectOption, AttributeSelection, AttributeSelectionMap, PlantAttributesAsArray, Merch } from "@/Interfaces/interfaces"
import { plantAttributeMapping, attributeSelectionMappingReverse, PLANT_CATEGORY_ID, attributeSelectionMapping } from "@/components/square-utils/custom-attributes";
import { CustomOption } from '@/components/shared-components/search-dropdown';
import { Box, VStack } from "@chakra-ui/react";
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import Navbar from "@/components/layout/navbar";


interface MarketplacePropTypes{
    data: Plant
}

const ProductDetailPage: React.FC<MarketplacePropTypes> = (props) => {

    return(
        <>
        <ProductDetailView item={props.data}/>
        </>

    )    

}

export const getServerSideProps : GetServerSideProps = async ({params}) => {

    console.log(params)


    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });


    let data : Merch | undefined
    let filterOptionsObject: any = {}
    
  try{

    let { catalogApi } = client

    let attributeMapping: AttributeSelectionMap = {};

    const attributes = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ]
      });


    const ids = Object.keys(attributeSelectionMappingReverse)
    const objects = attributes.result.objects
    

    objects?.forEach((i) => {
      if(ids.indexOf(i.id) !== -1){
        const options = i.customAttributeDefinitionData?.selectionConfig?.allowedSelections?.map((q) =>  { return({value: q.name, label : q.name} as CustomOption)});
        options?.push({value: 'all', label: 'All'})
        const name = attributeSelectionMappingReverse[i.id]
        filterOptionsObject[name] = options 
      }
    })



    //return await filterOptionsObject as FilterOptionsObject

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

    let response;

    if(params?.pid){

        response = await client.catalogApi.retrieveCatalogObject(params?.pid as string);
    }
    

    const item = response?.result.object

    const priceVariations : PriceVariation[] | undefined = item?.itemData?.variations?.map((i, index, array) => {

        return {
            'id': i.itemVariationData?.itemId,
            'price' :  i.itemVariationData?.priceMoney?.amount?.toString() ?? null,
            'type' :  i.itemVariationData?.name
        } as PriceVariation
    })

    const attributeCheck = item?.customAttributeValues

    const plantAttributes: PlantAttributesAsArray = {}

    const attributeArray = [
        'soilMoisture',
        'form',
        'difficulty',
        'dormancy',
        'growthRate',
        'flowerColor',
        'ecosystems',
        'lifeCycle',
        'sun',
        'growthForm'
    ]

    if(attributeCheck){
        attributeArray.forEach((val) => {
            const valCheck = attributeCheck[plantAttributeMapping[val]]
            if(valCheck){
                let values: string[] = []
                valCheck.selectionUidValues?.forEach((i) => {
                    attributeMapping[val]?.selectionArr?.forEach((sel: SelectOption) => {
                        if(i === sel.id){
                            sel.value && values.push(sel.value)
                        }
                    })
                })

                plantAttributes[val] = values
            }

        })

    }
        


        /*
        const plantAttributes: PlantAttributes = {
            soilMoisture: item.customAttributeValues?[plantAttributeMapping.soilMoisture]
            form:
            difficulty:
            dormancy:
            growthRate:
            ecosystems: 
            sun:
            lifeCycle:

        }
        */

    data = {
        id: item?.id,
        name : item?.itemData?.name,
        description: item?.itemData?.description !== undefined ? item?.itemData?.description : null,
        images: item?.itemData?.imageIds !== undefined ? item?.itemData?.imageIds :  null,
        price: priceVariations,
        imageUrls: [],
        plantAttributes: plantAttributes
    } as Merch



    let imageIdArray :  string[] = []
    
    data.images?.forEach((id) => imageIdArray.push(id))
      

    const imageUrls = await client.catalogApi.batchRetrieveCatalogObjects({
      objectIds: imageIdArray
    });

    data.imageUrls = imageUrls.result?.objects?.map((item) => item.imageData?.url ? item.imageData?.url : null)

  } catch (error) {
    if (error instanceof ApiError) {
      error.result.errors.forEach(function (e: any) {
        console.log(e.category);
        console.log(e.code);
        console.log(e.detail);
      });
    } else {
      console.log("Unexpected error occurred: ", error);
    }
  }

  return{
    props: { data: data }
  }
    
}



export default ProductDetailPage;