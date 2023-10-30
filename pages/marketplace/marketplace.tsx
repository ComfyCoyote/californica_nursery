'use client'

import { getImageURL, queryFirestorePlants } from "@/firebase/firebaseFunctions"
import MarketplaceDrawer from "@/components/drawer"
import React from 'react'
import Navbar from "@/components/navbar"
import TabBar from "@/components/tab-bar"
import ShoppingCart from "@/components/shoppingCart"
import { useCart } from "@/shoppingCartContext/shoppingCartContext"
import { PlaidProduct, Plant } from "@/Interfaces/interfaces"
import CardArray from "./productArray"
import { GetServerSideProps } from "next"
import { useEffect, useState } from 'react';
import axios, {AxiosRequestConfig} from 'axios'
import { Client, Environment, ApiError, SearchCatalogObjectsRequest } from "square";
import { NONAME } from "dns"
import { Vazirmatn } from "next/font/google"
import { type } from "os"



interface MarketplacePropTypes{
    data: Array<Object>
    
}

async function getSampleImage() {
    const image = await getImageURL('sample image')
    return image
    
}

const Marketplace: React.FC<MarketplacePropTypes>= (props) => {

    const { cartItems } = useCart()
    const [items, setItems] = useState([]);

    console.log(cartItems)
    console.log(props.data)


    if(props.data){
    return(
        <React.Fragment>
        <Navbar />
        <TabBar tabOptions={['Succulents', 'Flowers', 'Cacti']}/>
        <MarketplaceDrawer />
        <CardArray items={props.data} secondItem={'test data'}/>
        </React.Fragment>

    )
    } else {

        return(
            <div>
                <text>The data was unable to be fetched</text>
            </div>
        )

    }
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


    let data : PlaidProduct[] | undefined = []
  try {
    let { catalogApi } = client

    const response = await catalogApi.searchCatalogItems({})

    data = response.result?.items?.map((item) => {
      
      return {
        id: item.id,
        name : item?.itemData?.name,
        description: item?.itemData?.description !== undefined ? item?.itemData?.description : null,
        images: item?.itemData?.imageIds !== undefined ? item?.itemData?.imageIds :  null,
        imageUrls: []
      } as PlaidProduct

    })

    let imageIdArray :  string[] = []
    data?.forEach((item: PlaidProduct) => {
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

    if(data){
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

  return {
    props : {
        data: data
    }
  }
};
      



    /*
    const headers = {
        'Authorization': `Bearer ${process.env.SQUARE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        'Square-Version' : '2023-09-25'
    };

    const config: AxiosRequestConfig = {
        method: 'POST', // Change to 'POST', 'PUT', 'DELETE', etc. as needed
        url: 'https://connect.squareup.com/v2/catalog/search-catalog-items',
        headers: headers,
        // data: { key: 'value' }, // Include data for POST or PUT requests
    };
    
    
    const squareData = await axios(config).then((response) => {
        // Handle the successful response here
        console.log('Response data:', response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      })

    const data = await queryFirestorePlants('Products')
    const response = await client.catalogApi.searchCatalogItems({});

    */

export default Marketplace