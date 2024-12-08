import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError } from "square";
import { GetServerSideProps, GetStaticProps } from "next";
import { Plant } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { PLANT_CATEGORY_ID } from "@/components/square-utils/custom-attributes";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import { useEffect, type ReactElement } from "react";
import { getCatalogItemsAPI } from "@/components/square-utils/square-api-wrappers/getCatalogItemsAPI";
import type { CatalogObject } from "square";
import constructPlant from "@/components/square-utils/product-constuctors/constructPlant";
import getInventoryCount from "@/components/square-utils/getInventoryCount";
import { useMarketplace } from "@/components/marketplace/marketplaceContext/marketplaceContext";

interface MarketplacePropTypes{
    data: Array<Object>
    filterOptionsObject: any
    cursor: string
}




const MarketplacePage: NextPageWithLayout<MarketplacePropTypes> = (props) => {

    const {setCursor, cursor, setItems, plantData } = useMarketplace()
    
    useEffect(() => {
        if(plantData.length === 0){
            const cursorKey = "/plantsCursor"
            cursor[cursorKey] = props.cursor
            setCursor(cursor)
            sessionStorage.setItem(cursorKey, props.cursor)
            setItems("/plants", props.data)
        }
        

    }, [])

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


export const getStaticProps : GetStaticProps = async (context) => {


    let cursor: string;

    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    let data: Plant[] = []
    
    try{

        const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID)

        const variationObjectIds = archivedState.items.flatMap((p: any) => p.item_data?.variations.map((v: any) => v.id) || []);
        
        const inventory = await getInventoryCount(client, variationObjectIds)

        cursor = archivedState?.cursor

        const promise: any = []

        if(inventory?.counts){
            archivedState?.items?.forEach((item: any) => {

                const itemVariationIds = item?.item_data?.variations?.map((v: any) => v.id)
            
                const specificVariation = inventory?.counts?.filter((v) => itemVariationIds?.indexOf(v.catalogObjectId) !== -1)
            
                const promiseplant = constructPlant(item as CatalogObject, specificVariation)
                            
                promise.push(promiseplant)
                  
            })

        }
        

        data = await Promise.all(promise)


        return {
            props: { data: data, cursor: cursor}
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