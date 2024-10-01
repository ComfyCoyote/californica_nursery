import { Client, Environment, ApiError } from "square";
import { PLANT_CATEGORY_ID, MERCH_CATEGORY_ID} from "@/components/square-utils/custom-attributes";
import { getCatalogItemsAPI } from "@/components/square-utils/getCatalogItemsAPI";
import constructPlant from "@/components/square-utils/constructPlant";
import getImages from "@/components/square-utils/getImages"
import getInventoryCount from "@/components/square-utils/getInventoryCount";


export default async function handler(req, res){
    try{
        if (req.method === 'POST') {
            const { body } = req
            let result;

            const cursor = body.cursor
            const type = body.type
            const query = body.query
            const limit = body.limit

            if(type === "/plants"){

              result = await getPlants(cursor, query, limit)

            }else if(type === "/merch"){

              result = await getMerch(cursor, query, limit)

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

async function getPlants(cursor, query=null){

    let newCursor;
    //initialize square client
    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let data = []
    
    try{

        const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID, cursor, query)

        const variationObjectIds = archivedState.items.flatMap((p) => p.item_data?.variations.map((v) => v.id) || []);

        const imageIds = archivedState.items.flatMap((p) => p.item_data.image_ids)
        
        const inventory = await getInventoryCount(client, variationObjectIds)

        const imageUrls = await getImages(client, imageIds)


        newCursor = archivedState?.cursor

        const promise = []

        archivedState?.items?.forEach((item) => {

          const itemVariationIds = item?.item_data?.variations?.map((v) => v.id)
            
          const specificVariation = inventory?.counts?.filter((v) => itemVariationIds?.indexOf(v.catalogObjectId) !== -1)

          const specificImages = imageUrls?.objects?.filter((i) => item.item_data.image_ids.indexOf(i.id) !== -1)
      
          const promiseplant = constructPlant(item, specificVariation, specificImages)
                      
          promise.push(promiseplant)
              
        })

        data = await Promise.all(promise)

        return {
            items: data, cursor: newCursor
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

