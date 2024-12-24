import { read } from "fs";
import { Client } from "square";


const { ordersApi } = new Client({
    accessToken: process.env.SQUARE_PRODUCTION_ACCESS_TOKEN,
    environment: 'production'
  });


function toReadable(val){
    const num = Number(val)
    const readable = num/100
    return String(readable)
}



export default async function handler(req, res){
    try{
        if (req.method === 'POST' ) {
            const { body } = req
            
            body["proposedRewards"] = null

            const { result } = await ordersApi.calculateOrder(body)

            
            if(result.errors){
    
              res.status(400).json(result.errors)
    
            } else {

                const moneys = {
                    total: toReadable(result.order.totalMoney.amount),   
                    tax: toReadable(result.order.totalTaxMoney.amount),
                    discount: toReadable(result.order.totalDiscountMoney.amount),
                    tip: toReadable(result.order.totalTipMoney).amount,
                    service: toReadable(result.order.totalServiceChargeMoney.amount),
                    net: toReadable(result.order.netAmountDueMoney.amount)
                }
    
              res.status(200).json(moneys);
    
            }
          } else {
            res.status(500).send();
          }


    } catch(err) {
        console.log("ERROR")
        console.log(err)
        res.status(400).json(err)
    }


}