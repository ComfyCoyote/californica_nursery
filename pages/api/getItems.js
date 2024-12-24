import getProduct from "../../components/square-utils/custom-api-functions/getProduct";


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

            console.log(textFilter)

            if(type === "/plants"){

              result = await getProduct('PLANT', cursor, query, textFilter, limit)

            }else if(type === "/merch"){

              result = await getProduct('MERCH', cursor, query, textFilter, limit)

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


