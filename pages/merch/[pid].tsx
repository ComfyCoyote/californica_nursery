import { Client, Environment, ApiError} from "square";
import { GetServerSideProps } from "next";
import { Merch } from "@/Interfaces/interfaces";
import { NextPageWithLayout } from "../_app";
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import type { ReactElement } from 'react'
import Layout from "@/components/layout/layout";
import constructMerch from "@/components/square-utils/constructMerch";
import { getCatalogObject } from "@/components/square-utils/getCatalogObject";


interface MarketplacePropTypes{
    data: Merch
}

const ProductDetailPage: NextPageWithLayout<MarketplacePropTypes> = (props: any) => {

    return(

        <ProductDetailView item={props.data} type={'merch'}/>

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


    let data : Merch | undefined
    
    try{

        if(params?.pid){

            const response = await getCatalogObject(params?.pid as string)

            const item = response?.object

            const promise = constructMerch(client, item)

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