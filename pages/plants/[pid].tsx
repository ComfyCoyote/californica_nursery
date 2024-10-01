import { Client, Environment, ApiError} from "square";
import { GetServerSideProps } from "next";
import { Plant } from "@/Interfaces/interfaces"
import ProductDetailView from "@/components/marketplace/product-detail-view/product-detail-view";
import Layout from "@/components/layout/layout";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from "../_app";
import constructPlant from "@/components/square-utils/constructPlant";
import { getCatalogObject } from "@/components/square-utils/getCatalogObject";
import getInventoryCount from "@/components/square-utils/getInventoryCount";
import getImages from "@/components/square-utils/getImages";

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

export const getServerSideProps : GetServerSideProps = async ({params}) => {

    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });


    let data : Plant | undefined
    
    try{

        if(params?.pid){

            const response = await getCatalogObject(params?.pid as string)

            const item = response?.object

            const variationObjectIds = item.item_data?.variations.flatMap((v: any) => v.id) || [];

            const inventory = await getInventoryCount(client, variationObjectIds)

            const imageIds = item.item_data.image_ids

            const imageUrls = await getImages(client, imageIds)

            const promise = constructPlant(item, inventory?.counts, imageUrls?.objects)

            data = await Promise.resolve(promise)

            console.log(data)

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