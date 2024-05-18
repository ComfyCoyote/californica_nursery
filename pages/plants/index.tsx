import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { GetServerSideProps } from "next";
import { Plant, PriceVariation, SelectOption, AttributeSelection, AttributeSelectionMap, PlantAttributesAsArray } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { plantAttributeMapping, attributeSelectionMappingReverse, PLANT_CATEGORY_ID, attributeSelectionMapping } from "@/components/square-utils/custom-attributes";
import { CustomOption } from '@/components/shared-components/search-dropdown';
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import type { ReactElement } from "react";
import { getCatalogItemsAPI } from "@/components/square-utils/getCatalogItemsAPI";
import type { SearchCatalogItemsRequest } from "square";


interface MarketplacePropTypes{
    data: Array<Object>
    filterOptionsObject: any
}



const MarketplacePage: NextPageWithLayout<MarketplacePropTypes> = (props) => {


    return(

        <Marketplace title='plants' filterOptions={props.filterOptionsObject}>
          <ProductCardArray items={props.data} type="plants"/>
        </Marketplace>

    )
}

MarketplacePage.getLayout = function getLayout(page: ReactElement){
  return(
      <Layout>
          {page}
      </Layout>
  )
}


export const getServerSideProps : GetServerSideProps = async () => {


    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let data : Plant[] | undefined = []
    let filterOptionsObject: any = {}
    
  try{
    let { catalogApi } = client

    let attributeMapping: AttributeSelectionMap = {};

    const attributes = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ],
        
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

    const body = {
      categoryIds: [PLANT_CATEGORY_ID],
      archivedState: "ARCHIVED_STATE_NOT_ARCHIVED"
    }

    const response = await catalogApi.searchCatalogItems(body)

    const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID)

    archivedState.items?.forEach((item: any) => {


        const priceVariations : PriceVariation[] | undefined = item?.item_data?.variations?.map((i: any) => {

            return {
                'id': i.id,
                'price' :  i.item_variation_data?.price_money?.amount?.toString() ?? null,
                'type' :  i.item_variation_data?.name
            } as PriceVariation
        })

        const attributeCheck = item.custom_attribute_values
        console.log('ATTRIBUTE CHECK')
        console.log(attributeCheck)

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
                    valCheck.selection_uid_values?.forEach((i: any) => {
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
  
      data?.push({
          id: item.id,
          name : item?.item_data?.name,
          description: item?.item_data?.description !== undefined ? item?.item_data?.description : null,
          images: item?.item_data?.image_ids !== undefined ? item?.item_data?.image_ids :  null,
          price: priceVariations,
          imageUrls: [],
          plantAttributes: plantAttributes
      } as Plant)

    })


    let imageIdArray :  string[] = []
    data?.forEach((item: Plant) => {
      if(item){
        item.images?.forEach((id) => imageIdArray.push(id))
      }})

    const imageUrls = await client.catalogApi.batchRetrieveCatalogObjects({
      objectIds: imageIdArray
    });





    imageUrls.result?.objects?.forEach((img) => {
      data?.forEach((item) => {
        if(item.images?.indexOf(img.id) !== -1){
          if(img.imageData?.url !== undefined && item.imageUrls !== undefined){
            const extantArr = item.imageUrls
            const newArr = [...extantArr, img.imageData?.url ]
            item.imageUrls = newArr

          }
          

        }

      })

    })

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
    props: { data: data, filterOptionsObject: filterOptionsObject }
  }
};


export default MarketplacePage;