import { Client, Environment, ApiError } from "square";
import { plantAttributeMapping, attributeSelectionMappingReverse, PLANT_CATEGORY_ID, attributeSelectionMapping } from "@/components/square-utils/custom-attributes";
import { getCatalogItemsAPI } from "@/components/square-utils/getCatalogItemsAPI";
import getInventoryCount from "@/components/square-utils/getInventoryCount";

export default async function handler(req, res){
    try{
        if (req.method === 'POST') {
            const { body } = req
            let result;

            const cursor = body.cursor
            const type = body.type

            if(type === "/plants"){

              result = await getPlants(cursor)

            }else if(type === "/merch"){

              result = await getMerch(cursor)

            }
            
            if(result.errors){
              console.log(result.errors)
              res.status(400).json(result.errors)
    
            } else {
              
              res.status(200).json(result);
    
            }
          } else {
            res.status(500).send();
          }


    } catch(err) {
        res.status(400).json(err)
    }


}

async function getPlants(cursor){

    let newCursor;
    //initialize square client
    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let data = []
    let filterOptionsObject = {}
    
  try{

    let attributeMapping = {};
    //get custom attibutes definitions from square
    const attributes = await client.catalogApi.searchCatalogObjects({
        objectTypes: [
          'CUSTOM_ATTRIBUTE_DEFINITION'
        ],
        
      });

    //get attribute ids
    const ids = Object.keys(attributeSelectionMappingReverse)
    const objects = attributes.result.objects
    
    //re map the attribute objects ids with their assigned values
    objects?.forEach((i) => {
      if(ids.indexOf(i.id) !== -1){
        const options = i.customAttributeDefinitionData?.selectionConfig?.allowedSelections?.map((q) =>  { return({value: q.name, label : q.name})});
        options?.push({value: 'all', label: 'All'})
        const name = attributeSelectionMappingReverse[i.id]
        filterOptionsObject[name] = options 
      }
    })


    const selectionIdArr = Object.values(attributeSelectionMapping)

    attributes.result?.objects?.forEach((item) => {
        if(selectionIdArr.indexOf(item.id) !== -1){
            const options = [] 
            const checkOptions = item.customAttributeDefinitionData?.selectionConfig?.allowedSelections

            if(checkOptions){
                checkOptions.forEach((i) => {
                    const op = {id: i.uid, value: i.name}
                    options.push(op)
            })}

            const name = item.customAttributeDefinitionData?.name
            const attributeSelectionObj = {
                name: name,
                key: item.customAttributeDefinitionData?.key,
                selectionArr: options
            }

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


    //get catalog items
    const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID, cursor)

    newCursor = archivedState?.cursor

    archivedState.items?.forEach((item) => {


        const priceVariations = item?.item_data?.variations?.map((i) => {

            return {
                'id': i.id,
                'price' :  i.item_variation_data?.price_money?.amount?.toString() ?? null,
                'type' :  i.item_variation_data?.name
            }
        })

        const priceVariationsId = priceVariations?.map((i) => { return i.id})


        priceVariationsId && getInventoryCount(client, priceVariationsId)

        const attributeCheck = item.custom_attribute_values
        

        const plantAttributes = {}

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
                    let values = []
                    valCheck.selection_uid_values?.forEach((i) => {
                        attributeMapping[val]?.selectionArr?.forEach((sel) => {
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
      })

    })

    //get images for each plant
    let imageIdArray = []
    data?.forEach((item) => {
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
      error.result.errors.forEach(function (e) {
        console.log(e.category);
        console.log(e.code);
        console.log(e.detail);
      });
    } else {
      console.log("Unexpected error occurred: ", error);
    }
  }
  return { items: data, filterOptionsObject: filterOptionsObject, cursor: newCursor}
  
}



async function getMerch(cursor){

    const client = new Client({
      accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
      environment: Environment.Production,
  });




  let data = []

  try{
  let { catalogApi } = client

  const body = {
    categoryIds: [MERCH_CATEGORY_ID],
    archivedState: "ARCHIVED_STATE_NOT_ARCHIVED"
  };

  const response = await catalogApi.searchCatalogItems(body)

  const archivedState = await getCatalogItemsAPI(MERCH_CATEGORY_ID, cursor)

  cursor = archivedState?.cursor

  archivedState?.items?.forEach((item) => {

    const priceVariations = item?.itemData?.variations?.map((i) => {

      return {
          'price' :  i.item_variation_data?.price_money?.amount?.toString() ?? null,
          'type' :  i.item_variation_data?.name
      }
  })

  data?.push({
    id: item.id,
    name : item?.item_data?.name,
    description: item?.item_data?.description !== undefined ? item?.item_data?.description : null,
    images: item?.item_data?.image_ids !== undefined ? item?.item_data?.image_ids :  null,
    price: priceVariations,
    imageUrls: [],
    seedAttributes: null
  })





  })


  let imageIdArray = []
  data?.forEach((item) => {
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
    error.result.errors.forEach(function (e) {
      console.log(e.category);
      console.log(e.code);
      console.log(e.detail);
    });
  } else {
    console.log("Unexpected error occurred: ", error);
  }
  }

  return{ data: data }
  
};

