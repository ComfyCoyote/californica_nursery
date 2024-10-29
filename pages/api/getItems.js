import getMerch from "../../components/square-utils/custom-api-functions/getMerch";
import getPlants from "../../components/square-utils/custom-api-functions/getPlants";


export default async function handler(req, res){
    try{
        if (req.method === 'POST') {
            const { body } = req
            let result;

            const cursor = body.cursor
            const type = body.type
            const query = body.query
            const limit = body.limit
            const textFilter = body.textFilter

            if(type === "/plants"){

              result = await getPlants(cursor, query, textFilter, limit)

            }else if(type === "/merch"){

              result = await getMerch(cursor, query, limit)

            }
            
            if(result.errors){
              console.log(result.errors)
              res.status(400).json(result.errors)
    
            } else {
              
              res.status(200).json(result);
    
            }
          } else {
            res.status(500).send();
          }


    } catch(err) {
        res.status(400).json(err)
    }


}


