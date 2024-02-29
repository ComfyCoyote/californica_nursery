import Marketplace from "@/components/marketplace/marketplace";
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { GetServerSideProps } from "next";
import { Plant, PlantAttributes, PriceVariation, SelectOption, AttributeSelection, AttributeSelectionMap, PlantAttributesAsArray, Seed } from "@/Interfaces/interfaces"
import ProductCardArray from "@/components/marketplace/product-display/product-card-array";
import { plantAttributeMapping, SEED_CATEGORY_ID, attributeSelectionMapping } from "@/components/square-utils/custom-attributes";

interface MarketplacePropTypes{
    data: Array<Object>
    
}



const MarketplacePage: React.FC<MarketplacePropTypes> = (props) => {

    return(
        <Marketplace title='seeds'>
          <ProductCardArray items={props.data} />
        </Marketplace>
    )
}




export const getServerSideProps : GetServerSideProps = async () => {


    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });

    const body: SearchCatalogObjectsRequest = {
        objectTypes: [
          'ITEM'
        ],
        limit: 100,
      };


    let data : Seed[] | undefined = []
    
  try{
    let { catalogApi } = client


    const response = await catalogApi.searchCatalogItems({categoryIds: [SEED_CATEGORY_ID]})

    response.result?.items?.forEach((item) => {

      const priceVariations : PriceVariation[] | undefined = item?.itemData?.variations?.map((i, index, array) => {

        return {
            'price' :  i.itemVariationData?.priceMoney?.amount?.toString() ?? null,
            'type' :  i.itemVariationData?.name
        } as PriceVariation
    })

    data?.push({
      id: item.id,
      name : item?.itemData?.name,
      description: item?.itemData?.description !== undefined ? item?.itemData?.description : null,
      images: item?.itemData?.imageIds !== undefined ? item?.itemData?.imageIds :  null,
      price: priceVariations,
      imageUrls: [],
      seedAttributes: null
  } as Seed)



    

})


    let imageIdArray :  string[] = []
    data?.forEach((item: Seed) => {
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