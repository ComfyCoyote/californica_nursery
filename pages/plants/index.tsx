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
import getCustomAttributes from "@/components/square-utils/getCustomAttributes";
import constructPlant from "@/components/square-utils/constructPlant";

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

        const attributeMapping = await getCustomAttributes(client)

        const archivedState = await getCatalogItemsAPI(PLANT_CATEGORY_ID)

        cursor = archivedState?.cursor

        const promise: any = []

        archivedState?.items?.forEach((item: CatalogObject) => {

            const promiseplant = constructPlant(client, item as CatalogObject, attributeMapping)
                        
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