import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { GetServerSideProps } from "next";
import { Plant, PlantAttributes, PriceVariation, SelectOption, AttributeSelection, AttributeSelectionMap, PlantAttributesAsArray } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { plantAttributeMapping, PLANT_CATEGORY_ID, attributeSelectionMapping } from "@/components/square-utils/custom-attributes";

interface MarketplacePropTypes{
    data: Array<Object>
    
}



const MarketplacePage: React.FC<MarketplacePropTypes> = (props) => {

    return(
        <Marketplace title='plants'>
          <ProductCardArray items={props.data} />
        </Marketplace>
    )
}




export const getServerSideProps : GetServerSideProps = async () => {


    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    const body: SearchCatalogObjectsRequest = {
        objectTypes: [
          'ITEM'
        ],
        limit: 100,
      };


    let data : Plant[] | undefined = []
    
  try{
    let { catalogApi } = client

    let attributeMapping: AttributeSelectionMap = {};

    const attributes = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ]
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


    const response = await catalogApi.searchCatalogItems({})

    response.result?.items?.forEach((item) => {

    if(item.itemData?.categoryId === PLANT_CATEGORY_ID){

        const priceVariations : PriceVariation[] | undefined = item?.itemData?.variations?.map((i, index, array) => {

            return {
                'price' :  i.itemVariationData?.priceMoney?.amount?.toString() ?? null,
                'type' :  i.itemVariationData?.name
            } as PriceVariation
        })

        const attributeCheck = item.customAttributeValues

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
          
        console.log({
            id: item.id,
            name : item?.itemData?.name,
            description: item?.itemData?.description !== undefined ? item?.itemData?.description : null,
            images: item?.itemData?.imageIds !== undefined ? item?.itemData?.imageIds :  null,
            price: priceVariations,
            imageUrls: [],
            plantAttributes: plantAttributes
        })
        data?.push({
            id: item.id,
            name : item?.itemData?.name,
            description: item?.itemData?.description !== undefined ? item?.itemData?.description : null,
            images: item?.itemData?.imageIds !== undefined ? item?.itemData?.imageIds :  null,
            price: priceVariations,
            imageUrls: [],
            plantAttributes: plantAttributes
        } as Plant)


    }

    

})


    let imageIdArray :  string[] = []
    data?.forEach((item: Plant) => {
      if(item){
        item.images?.forEach((id) => imageIdArray.push(id))
      }})

    const imageUrls = await client.catalogApi.batchRetrieveCatalogObjects({
      objectIds: imageIdArray
    });

    console.log(imageUrls)

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
    props: { data: data }
  }
};


export default MarketplacePage;