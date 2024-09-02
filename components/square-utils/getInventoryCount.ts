import type { Client } from "square";


async function getInventoryCount(client: Client, catalogObjectIds: string[]){
    
    try {
        const response = await client.inventoryApi.batchRetrieveInventoryCounts({
          catalogObjectIds: catalogObjectIds,
          locationIds: [
            'L3C4J69QTRCAA'
          ],
        });
      

        return response.result

      } catch(error) {
        console.log(error);
      }

}


export default getInventoryCount
