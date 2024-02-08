import { PlaidProduct, PriceVariation, Plant } from '@/Interfaces/interfaces'
import ProductDetailView from '@/components/marketplace/product-detail-view/product-detail-view'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { string } from 'square/dist/types/schema';
import { useCallback } from 'react';
import Marketplace from '@/components/marketplace/marketplace';
import { ParsedUrlQuery } from "querystring";



interface ProductDetailPagePropTypes{
    item: Plant
    
}



const ProductDetailPage: React.FC<ProductDetailPagePropTypes> = (props) => {

    return(
        <Marketplace title='plants'>
            <ProductDetailView item={props.item} setProduct={() => console.log('setProduct')}/>
        </Marketplace>
    )
}


/*
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    console.log('PRODUCT JSON')
    
    
    
    return {
        props: {
        item,
        },
    };

   
  }
*/



export default ProductDetailPage;