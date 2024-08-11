import { Client, Environment, ApiError} from "square";
import { GetServerSideProps } from "next";
import { Seed } from "@/Interfaces/interfaces";
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import Layout from "@/components/layout/layout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from "../_app";
import getCustomAttributes from "@/components/square-utils/getCustomAttributes";
import { getCatalogObject } from "@/components/square-utils/getCatalogObject";
import constructSeed from "@/components/square-utils/constructSeed";

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

export const getServerSideProps : GetServerSideProps = async ({params}) => {

    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });


    let data : Seed | undefined
    
    try{

        const attributeMapping = await getCustomAttributes(client)

        if(params?.pid){

            const response = await getCatalogObject(params?.pid as string)

            const item = response?.object

            const promise = constructSeed(client, item)

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