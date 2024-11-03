import { Client, Environment, ApiError } from "square";
import { MERCH_CATEGORY_ID} from "@/components/square-utils/custom-attributes";
import { getCatalogItemsAPI } from "@/components/square-utils/square-api-wrappers/getCatalogItemsAPI"
import constructMerch from "@/components/square-utils/product-constuctors/constructMerch"
import getImages from "@/components/square-utils/getImages"
import getInventoryCount from "@/components/square-utils/getInventoryCount";



async function getMerch(cursor, query=null, textFilter, limit){

    let newCursor;
    //initialize square client
    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let data = []
    
    try{

        const archivedState = await getCatalogItemsAPI(MERCH_CATEGORY_ID, cursor, query, textFilter, limit)

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
      
          const promiseplant = constructMerch(item, specificVariation, specificImages)
                      
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


export default getMerch