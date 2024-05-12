import { Client } from "square";


const { ordersApi } = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
  });



export default async function handler(req, res){
    try{
        if (req.method === 'POST' ) {
            const { body } = req

            const { result } = await ordersApi.createOrder(body)
            
            if(result.errors){
    
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