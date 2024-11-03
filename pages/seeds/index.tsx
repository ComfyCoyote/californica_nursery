import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError, CatalogObject } from "square";
import { GetServerSideProps } from "next";
import { Seed } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { SEED_CATEGORY_ID } from "@/components/square-utils/custom-attributes";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import { getCatalogItemsAPI } from "@/components/square-utils/square-api-wrappers/getCatalogItemsAPI";
import getFilterOptions from "@/components/square-utils/getFilterOptions";
import getCustomAttributes from "@/components/square-utils/getCustomAttributes";
import constructPlant from "@/components/square-utils/product-constuctors/constructPlant";
import getInventoryCount from "@/components/square-utils/getInventoryCount";
import getImages from "@/components/square-utils/getImages";
import { useMarketplace } from "@/components/marketplace/marketplaceContext/marketplaceContext";
import { useEffect } from "react";

interface MarketplacePropTypes{
    data: Array<Object>
    cursor: string
    
}



const MarketplacePage: NextPageWithLayout<MarketplacePropTypes> = (props) => {

    const { setCursor, setItems, seedData } = useMarketplace()
    
    useEffect(() => {
        if(seedData.length === 0){
            console.log('useeffect')
            setCursor(props.cursor)
            setItems("/seeds", props.data)
        }
        

    }, [])

    return(
        <Marketplace title='seeds' filterOptions={null}>
          <ProductCardArray items={props.data} cursor={props.cursor} type="seeds"/>
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
  let data: Seed[] = []
  
  try{


      filterOptionsObject = await getFilterOptions(client)

      const attributeMapping = await getCustomAttributes(client)

      const archivedState = await getCatalogItemsAPI(SEED_CATEGORY_ID)

      const variationObjectIds = archivedState.items.flatMap((p: any) => p.item_data?.variations.map((v: any) => v.id) || []);

      const imageIds = archivedState.items.flatMap((p: any) => p.item_data.image_ids)
      
      const inventory = await getInventoryCount(client, variationObjectIds)

      const imageUrls = await getImages(client, imageIds)

      cursor = archivedState?.cursor

      const promise: any = []

      archivedState?.items?.forEach((item: any) => {

        const itemVariationIds = item?.item_data?.variations?.map((v: any) => v.id)
            
        const specificVariation = inventory?.counts?.filter((v) => itemVariationIds?.indexOf(v.catalogObjectId) !== -1)

        const specificImages = imageUrls?.objects?.filter((i) => item.item_data.image_ids.indexOf(i.id) !== -1)
    
        const promiseplant = constructPlant(item as CatalogObject, specificVariation, specificImages)
                    
        promise.push(promiseplant)
            
      })

      data = await Promise.all(promise)

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


  return {
    props: { data: [], filterOptionsObject: {}, cursor: ''}
}


};


export default MarketplacePage;