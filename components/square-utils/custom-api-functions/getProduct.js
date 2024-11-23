import { Client, Environment, ApiError } from "square";
import { 
    PLANT_CATEGORY_ID, 
    SEED_CATEGORY_ID, 
    MERCH_CATEGORY_ID 
} from "@/components/square-utils/custom-attributes";
import { getCatalogItemsAPI } from "@/components/square-utils/square-api-wrappers/getCatalogItemsAPI"
import constructPlant from "@/components/square-utils/product-constuctors/constructPlant"
import constructMerch from "@/components/square-utils/product-constuctors/constructMerch"
import getInventoryCount from "@/components/square-utils/getInventoryCount";


const CATEGORY_ID = {
    'PLANT': PLANT_CATEGORY_ID,
    'SEED': SEED_CATEGORY_ID,
    'MERCH': MERCH_CATEGORY_ID
}

async function getProduct(type, cursor, query=null, textFilter, limit){

    let newCursor;
    //initialize square client
    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let data = []
    
    try{

        const archivedState = await getCatalogItemsAPI(CATEGORY_ID[type], cursor, query, textFilter, limit)

        const variationObjectIds = archivedState.items.flatMap((p) => p.item_data?.variations.map((v) => v.id) || []);

        const inventory = await getInventoryCount(client, variationObjectIds)

        newCursor = archivedState?.cursor

        const promise = []

        archivedState?.items?.forEach((item) => {

          const itemVariationIds = item?.item_data?.variations?.map((v) => v.id)
            
          const specificVariation = inventory?.counts?.filter((v) => itemVariationIds?.indexOf(v.catalogObjectId) !== -1)
            
          let promiseProduct;

          if(type === 'MERCH'){
            promiseProduct = constructMerch(item, specificVariation)
          } else {
            promiseProduct = constructPlant(item, specificVariation)
          }
                      
          promise.push(promiseProduct)
              
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

export default getProduct