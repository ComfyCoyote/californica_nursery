import axios from "axios";

export const getCatalogObject = async (object_id: string) => {

    const url = `https://connect.squareup.com/v2/catalog/object/${object_id}`


    const headers = {
        "Authorization": `Bearer ${process.env.SQUARE_PRODUCTION_ACCESS_TOKEN}`,
        "Square-Version": '2024-05-15',
        'Content-Type': 'application/json'
    }

    const response = await axios.get(url, {headers: headers}).catch((error) => console.log(error))

    if(response){
        return response.data
    }
}