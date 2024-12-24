import { Client, Environment, ApiError} from "square";
import { GetStaticProps } from "next";
import { Seed } from "@/Interfaces/interfaces";
import { SEED_CATEGORY_ID } from "@/components/square-utils/custom-attributes";
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import Layout from "@/components/layout/layout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from "../_app";
import { getCatalogObject } from "@/components/square-utils/getCatalogObject";
import constructSeed from "@/components/square-utils/product-constuctors/constructSeed";
import getInventoryCount from "@/components/square-utils/getInventoryCount";
import axios from "axios";


interface MarketplacePropTypes{
    data: Seed
}

const ProductDetailPage: NextPageWithLayout<MarketplacePropTypes> = (props: any) => {

    return(

        <ProductDetailView item={props.data} type="seeds"/>

    )    

}

ProductDetailPage.getLayout = function getLayout(page: ReactElement){
    return(
        <Layout>
            {page}
        </Layout>
    )
}

export const getStaticPaths = async () => {

  try{
    const body = {
      "category_ids": [SEED_CATEGORY_ID],
      "archived_state": "ARCHIVED_STATE_NOT_ARCHIVED",
    }
    const headers = {
      "Authorization": `Bearer ${process.env.SQUARE_PRODUCTION_ACCESS_TOKEN}`,
      "Square-Version": '2024-05-15',
      'Content-Type': 'application/json'
    }  

    const url = "https://connect.squareup.com/v2/catalog/search-catalog-items"
      
    const response = await axios.post(url, body , {headers: headers}).catch((error) => console.log(error))
    
    if(response?.data){

      const paths = response.data.items.map((item: any) =>  {return {params: {pid: [item.id,item.item_data?.name]}}})

      return {paths, fallback: false}

    }
    

  } catch (error) {

    if (error instanceof ApiError) {

      error.result.errors.forEach(function (e: any) {
      
        console.log(e.code);
 
      });

    } else {

      console.log("Unexpected error occurred: ", error);

    }

  }

}


export const getStaticProps : GetStaticProps = async ({params}) => {

  const client = new Client({
      accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
      environment: Environment.Production,
  });

  let data : Seed | undefined
    
  try{

        if(params?.pid){

          const response = await getCatalogObject(params?.pid[0] as string)

          const item = response?.object

          const variationObjectIds = item.item_data?.variations.flatMap((v: any) => v.id) || [];

          const inventory = await getInventoryCount(client, variationObjectIds)

          const promise = constructSeed(item, inventory?.counts)

          data = await Promise.resolve(promise)
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

  return{
    props: { data: data }
  }
   
    
}



export default ProductDetailPage;