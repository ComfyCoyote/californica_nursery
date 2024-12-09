import { Client, Environment, ApiError} from "square";
import { GetServerSideProps, GetStaticProps } from "next";
import { Plant } from "@/Interfaces/interfaces"
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import Layout from "@/components/layout/layout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from "../_app";
import constructPlant from "@/components/square-utils/product-constuctors/constructPlant";
import { getCatalogObject } from "@/components/square-utils/getCatalogObject";
import getInventoryCount from "@/components/square-utils/getInventoryCount";
import getProduct from "@/components/square-utils/custom-api-functions/getProduct";


interface MarketplacePropTypes{
    data: Plant
}

const ProductDetailPage: NextPageWithLayout<MarketplacePropTypes> = (props: any) => {

    return(

        <ProductDetailView item={props.data} type={'plants'}/>

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


    let data : Plant | undefined
    
    try{

        if(params?.pid){

            const response = await getCatalogObject(params?.pid[0] as string)

            const item = response?.object

            const variationObjectIds = item.item_data?.variations.flatMap((v: any) => v.id) || [];

            const inventory = await getInventoryCount(client, variationObjectIds)

            const promise = constructPlant(item, inventory?.counts)

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