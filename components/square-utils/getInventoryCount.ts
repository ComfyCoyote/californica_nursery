import { Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import type { InventoryCount, Client } from "square";


async function getInventoryCount(client: Client, catalogObjectIds: string[]){
    
    try {
        const response = await client.inventoryApi.batchRetrieveInventoryCounts({
          catalogObjectIds: catalogObjectIds,
          locationIds: [
            'LDTGS9A177ABY'
          ],
        });
      

        return response.result

      } catch(error) {
        console.log(error);
      }

}


export default getInventoryCount
