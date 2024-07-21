import type { Client, InventoryCount } from "square"
import { PriceVariation, Merch } from "@/Interfaces/interfaces"
import getInventoryCount from "./getInventoryCount"


//This function constructs a Plant object by calling a series of square api's which gather
//all relevant data for the Plant to function in the marketplace


async function constructMerch(client: Client, item: any){


        //from the catalogobject's priceVariation, contruct a PriceVariation object which contains simplified
        //key value pairs and includes the inventory count for that item variation
        const priceVariations : PriceVariation[] | undefined = item?.item_data?.variations?.map((i: any) => {

            let quantity: InventoryCount[] | undefined

            getInventoryCount(client, [i.id]).then(
                (response)=> {
                    quantity = response?.counts
                }
            )

            return {
                'id': i.id,
                'price' :  i.item_variation_data?.price_money?.amount?.toString() ?? null,
                'type' :  i.item_variation_data?.name,
                'amount': quantity ? quantity[0].quantity : '0'
            } as PriceVariation
        })


        //get the image urls for each id listed in the CatalogObjects images key and append them to the images
        //key of the plant object

        let imageUrls: string[] = []

        const imageIds = item.item_data?.image_ids

        

        if(imageIds){
            const imageResponse = await client.catalogApi.batchRetrieveCatalogObjects({
                objectIds: imageIds
            });
            
            if(imageResponse.result.objects){
                imageUrls = imageResponse.result?.objects?.map((img) => {
                    if(img.imageData?.url){
                        return(img.imageData?.url)
                    } else {
                        return ''
                    }
                })
            }

        }
        
        
        const merch: Merch = {
            id: item.id,
            name : item?.item_data?.name ? item?.item_data?.name : '',
            description: item?.item_data?.description ? item?.item_data?.description : '',
            imageUrls: imageUrls,
            price: priceVariations,
        }

        return merch


        

    }


export default constructMerch
