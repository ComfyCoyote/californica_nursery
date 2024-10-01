import type { Client } from "square";

async function getImages(client: Client, imageIds: string[]){

        try {

            const imageResponse = await client.catalogApi.batchRetrieveCatalogObjects({
                objectIds: imageIds
            });
            
            return imageResponse.result

        } catch(error){
            console.log(error)
        }

}

export default getImages
