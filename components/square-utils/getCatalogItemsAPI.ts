import axios from "axios";


export interface CatalogItemsQuery {
    [key: string]: any

    custom_attribute_definition_id: string
    selection_uids_filter: string[]
}

interface Payload {
    [key: string]: any
    
    category_ids: string[]
    archived_state: string,
    cursor: string | string[] | null
    limit: number
    custom_attribute_filters?: CatalogItemsQuery[]
}

export const getCatalogItemsAPI = async (category_id: string, cursor: string | string[] | null = null, query: CatalogItemsQuery[] | null = null, limit=15) => {

    const url = "https://connect.squareup.com/v2/catalog/search-catalog-items"

    const body: Payload = {
        "category_ids" : [category_id],
        "archived_state": "ARCHIVED_STATE_NOT_ARCHIVED",
        "cursor": cursor,
        "limit": limit
    }

    if(query){
        body["custom_attribute_filters"] = query
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