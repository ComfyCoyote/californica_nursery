import { Client, Environment, ApiError} from "square";
import { GetServerSideProps, GetStaticProps } from "next";
import { Merch } from "@/Interfaces/interfaces";
import { NextPageWithLayout } from "../_app";
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import type { ReactElement } from 'react'
import Layout from "@/components/layout/layout";
import constructMerch from "@/components/square-utils/product-constuctors/constructMerch";
import { getCatalogObject } from "@/components/square-utils/getCatalogObject";
import getInventoryCount from "@/components/square-utils/getInventoryCount";



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




export const getStaticProps : GetStaticProps = async ({params}) => {


    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });


    let data : Merch | undefined
    
    try{

        if(params?.pid){

          const response = await getCatalogObject(params?.pid[0] as string)

          const item = response?.object

          const variationObjectIds = item.item_data?.variations.flatMap((v: any) => v.id) || [];

          const inventory = await getInventoryCount(client, variationObjectIds)

          const promise = constructMerch(item, inventory?.counts)

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