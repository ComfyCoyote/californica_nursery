import { PlaidProduct, PriceVariation } from '@/Interfaces/interfaces'
import ProductDetailView from '@/components/marketplace/product-detail-view/product-detail-view'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { string } from 'square/dist/types/schema';
import { useCallback } from 'react';
import Marketplace from '@/components/marketplace/marketplace';

interface ProductDetailPagePropTypes{
    item: PlaidProduct
    
}



const ProductDetailPage: React.FC<ProductDetailPagePropTypes> = (props) => {

    return(
        <Marketplace>
            <ProductDetailView item={props.item}/>
        </Marketplace>
    )
}



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    console.log(params)
    console.log('PARAMS')
    
    const { product } = params as { product: string };

    let response;

    const client = new Client({
        accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
        environment: Environment.Production,
    });
    
    try {

        response = await client.catalogApi.retrieveCatalogObject(product);
      
        console.log(response.result);

      } catch(error) {

        console.log(error);
      }
   
    const json = response?.result?.object

    
    //const imageArr = json?.itemData?.imageIds

    

    const priceVariations : PriceVariation[] | undefined = json?.itemData?.variations?.map((i, index, array) => {

        return {
            'price' :  i.itemVariationData?.priceMoney?.amount?.toString() ?? null,
            'type' :  i.itemVariationData?.name
        } as PriceVariation
    })


    const item = {
        id: json?.id,
        name : json?.itemData?.name,
        description: json?.itemData?.description !== undefined ? json?.itemData?.description : null,
        images: json?.itemData?.imageIds !== undefined ? json?.itemData?.imageIds :  null,
        price: priceVariations,
        imageUrls: []
    } as PlaidProduct

    let imageUrls;

    console.log(item?.images)

    if(item?.images){
        
        imageUrls = await client.catalogApi.batchRetrieveCatalogObjects({
            objectIds: item?.images
        });

        console.log(imageUrls)

        

    }

    imageUrls && imageUrls.result?.objects?.forEach((img) => {

    
        if(item.images?.indexOf(img.id) !== -1){
            if(img.imageData?.url !== undefined && item.imageUrls !== undefined){
                const extantArr = item.imageUrls
                const newArr = [...extantArr, img.imageData?.url ]
                item.imageUrls = newArr
    
        }
    
    
        }
    })

    

    

    
    return {
        props: {
        item,
        },
    };

   
  }


async function getImageURL(imageArr: string[] | null | undefined, client: Client){

    const urls = imageArr?.map((id) => {

        client.catalogApi.retrieveCatalogObject(id).then((response) => {
 
        const url = response?.result?.object?.imageData?.url

        return url
 
 
     })
        
     })

    console.log('URLS')
    console.log(urls)

    return urls

}

export default ProductDetailPage;