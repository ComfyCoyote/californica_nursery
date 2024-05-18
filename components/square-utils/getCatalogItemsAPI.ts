import axios from "axios";


export const getCatalogItemsAPI = async (category_id: string) => {
    console.log("This call was made from the custom api call")

    const url = "https://connect.squareup.com/v2/catalog/search-catalog-items"

    const body = {
        "category_ids" : [category_id],
        "archived_state": "ARCHIVED_STATE_NOT_ARCHIVED"
    }

    const headers = {
        "Authorization": `Bearer ${process.env.SQUARE_PRODUCTION_ACCESS_TOKEN}`,
        "Square-Version": '2024-05-15',
        'Content-Type': 'application/json'
    }

    const response = await axios.post(url, body , {headers: headers}).catch((error) => console.log(error))

    if(response){
        return response.data
    }
}