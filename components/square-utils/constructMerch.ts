import { PriceVariation, Merch } from "@/Interfaces/interfaces"


//This function constructs a Plant object by calling a series of square api's which gather
//all relevant data for the Plant to function in the marketplace


async function constructMerch(item: any, priceVaritions: any[] | undefined, imageIds: any[] | undefined){


    let priceVariation = priceVaritions?.map(
        (inventory: any) => {

            let amount: string | null | undefined = "0"

            if(inventory){
                if(inventory?.quantity){
                    amount = inventory?.quantity
                }
            }
            
            const i = item?.item_data?.variations.filter((i: any) => i.id === inventory.catalogObjectId)

            return {
                'id': i[0].id,
                'price' :  i[0].item_variation_data?.price_money?.amount?.toString() ?? null,
                'type' :  i[0].item_variation_data?.name,
                'amount': amount
            } as PriceVariation

        }
    )


    if(!priceVariation){
        priceVariation = [
            {
                'id': '0',
                'price': '0',
                'type': 'none',
                'amount': '0'
            } as PriceVariation
        ]
    }

        //get the image urls for each id listed in the CatalogObjects images key and append them to the images
        //key of the plant object

        let imageUrls: string[] = []

        
        if(imageIds){

            imageUrls = imageIds.map((i: any) => i.imageData?.url)
            
        }
        
        
        const merch: Merch = {
            id: item.id,
            name : item?.item_data?.name ? item?.item_data?.name : '',
            description: item?.item_data?.description ? item?.item_data?.description : '',
            imageUrls: imageUrls,
            price: priceVariation,
        }

        return merch


        

    }


export default constructMerch
