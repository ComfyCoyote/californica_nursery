import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { GetServerSideProps } from "next";
import { Plant, PlantAttributes, PriceVariation, Merch } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { plantAttributeMapping, SEED_CATEGORY_ID, attributeSelectionMapping, MERCH_CATEGORY_ID } from "@/components/square-utils/custom-attributes";
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/components/layout/layout";
import { getCatalogItemsAPI } from "@/components/square-utils/getCatalogItemsAPI";

interface MarketplacePropTypes{
    data: Array<Object>
    
}



const MarketplacePage: NextPageWithLayout<MarketplacePropTypes> = (props) => {

    return(
        <Marketplace title='merch' filterOptions={null}>
          <ProductCardArray items={props.data} type="merch"/>
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



export const getServerSideProps : GetServerSideProps = async () => {


    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    


    let data : Merch[] | undefined = []
    
  try{
    let { catalogApi } = client

    const body = {
      categoryIds: [MERCH_CATEGORY_ID],
      archivedState: "ARCHIVED_STATE_NOT_ARCHIVED"
    };

    const response = await catalogApi.searchCatalogItems(body)

    const archivedState = await getCatalogItemsAPI(MERCH_CATEGORY_ID)

    archivedState?.items?.forEach((item: any) => {

      const priceVariations : PriceVariation[] | undefined = item?.itemData?.variations?.map((i: any) => {

        return {
            'price' :  i.item_variation_data?.price_money?.amount?.toString() ?? null,
            'type' :  i.item_variation_data?.name
        } as PriceVariation
    })

    data?.push({
      id: item.id,
      name : item?.item_data?.name,
      description: item?.item_data?.description !== undefined ? item?.item_data?.description : null,
      images: item?.item_data?.image_ids !== undefined ? item?.item_data?.image_ids :  null,
      price: priceVariations,
      imageUrls: [],
      seedAttributes: null
  } as Merch)



    

})


    let imageIdArray :  string[] = []
    data?.forEach((item: Merch) => {
      if(item){
        item.images?.forEach((id) => imageIdArray.push(id))
      }})

    const imageUrls = await client.catalogApi.batchRetrieveCatalogObjects({
      objectIds: imageIdArray
    });


    imageUrls.result?.objects?.forEach((img) => {
      data?.forEach((item) => {
        if(item.images?.indexOf(img.id) !== -1){
          if(img.imageData?.url !== undefined && item.imageUrls !== undefined){
            const extantArr = item.imageUrls
            const newArr = [...extantArr, img.imageData?.url ]
            item.imageUrls = newArr

          }
          

        }

      })

    })

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
};


export default MarketplacePage;