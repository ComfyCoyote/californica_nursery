import { Client } from "square";


const { checkoutApi } = new Client({
    accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
    environment: 'production'
  });



export default async function handler(req, res){
    try{
        if (req.method === 'POST' ) {
            const { body } = req
            console.log(body)
            const { result } = await checkoutApi.createPaymentLink(body)
            console.log(result)
            if(result.errors){
                
              res.status(400).json(result.errors)
    
            } else {
    
              res.status(200).json({url: result.paymentLink.url, longUrl: result.paymentLink.longUrl});
    
            }
          } else {
            res.status(500).send();
          }


    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }


}