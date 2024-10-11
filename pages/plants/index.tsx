import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError } from "square";
import { GetServerSideProps } from "next";
import { Plant } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { PLANT_CATEGORY_ID } from "@/components/square-utils/custom-attributes";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import type { ReactElement } from "react";
import { getCatalogItemsAPI } from "@/components/square-utils/getCatalogItemsAPI";
import type { CatalogObject } from "square";
import getFilterOptions from "@/components/square-utils/getFilterOptions";
import constructPlant from "@/components/square-utils/constructPlant";
import getInventoryCount from "@/components/square-utils/getInventoryCount";
import getImages from "@/components/square-utils/getImages";

interface MarketplacePropTypes{
    data: Array<Object>
    filterOptionsObject: any
    cursor: string
}




const MarketplacePage: NextPageWithLayout<MarketplacePropTypes> = (props) => {


    return(

        <Marketplace title='plants' filterOptions={props.filterOptionsObject}>
          <ProductCardArray items={props.data} type="plants" cursor={props.cursor}/>
        </Marketplace>

    )
}

MarketplacePage.getLayout = function getLayout(page: ReactElement){
  return(
      <Layout>
          {page}
      </Layout>
  )
}


export const getServerSideProps : GetServerSideProps = async (context) => {

    let cursor: string;

    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let filterOptionsObject: any = {}
    let data: Plant[] = []
    
    try{

        filterOptionsObject = await getFilterOptions(client)

        const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID)

        const variationObjectIds = archivedState.items.flatMap((p: any) => p.item_data?.variations.map((v: any) => v.id) || []);

        const imageIds = archivedState.items.flatMap((p: any) => p.item_data.image_ids)
        
        const inventory = await getInventoryCount(client, variationObjectIds)

        const imageUrls = await getImages(client, imageIds)


        //instead of calling the API iteratively in constructPlant, call it once with a broad
        // item scope, and iteratively match IDs and values with plants

        //get inventory counts for all items

        cursor = archivedState?.cursor

        const promise: any = []

        if(inventory?.counts){
            archivedState?.items?.forEach((item: any) => {

                const itemVariationIds = item?.item_data?.variations?.map((v: any) => v.id)
            
                const specificVariation = inventory?.counts?.filter((v) => itemVariationIds?.indexOf(v.catalogObjectId) !== -1)

                const specificImages = imageUrls?.objects?.filter((i) => item.item_data.image_ids.indexOf(i.id) !== -1)
            
                const promiseplant = constructPlant(item as CatalogObject, specificVariation, specificImages)
                            
                promise.push(promiseplant)
                  
            })

        }
        

        data = await Promise.all(promise)

        console.log(data[3])


        return {
            props: { data: data, filterOptionsObject: filterOptionsObject, cursor: cursor}
        }


    } catch (error) {
        if (error instanceof ApiError) {

            error.result.errors.forEach(function (e: any) {
                console.log(e.category);
                console.log(e.code);
                console.log(e.detail);
            });

        } else {

            console.log("Unexpected error occurred: ", error);

        }

    }

    console.log(data.slice(-5))

    return {
      props: { data: [], filterOptionsObject: {}, cursor: ''}
  }

  
};



export default MarketplacePage;