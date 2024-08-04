import { Client, Environment, ApiError } from "square";
import { PLANT_CATEGORY_ID } from "@/components/square-utils/custom-attributes";
import { getCatalogItemsAPI } from "@/components/square-utils/getCatalogItemsAPI";
import getFilterOptions from "@/components/square-utils/getFilterOptions";
import getCustomAttributes from "@/components/square-utils/getCustomAttributes";
import constructPlant from "@/components/square-utils/constructPlant";

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
      
        filterOptionsObject = await getFilterOptions(client)

        const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID, cursor)

        newCursor = archivedState?.cursor

        const promise = []

        archivedState?.items?.forEach((item) => {

            const promiseplant = constructPlant(client, item)
                        
            promise.push(promiseplant)
              
        })

        data = await Promise.all(promise)

        return {
            items: data, filterOptionsObject: filterOptionsObject, cursor: newCursor
        }


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

    return {
      props: { data: [], filterOptionsObject: {}, cursor: ''}
    }
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

