import { Client } from "square";
import { randomUUID } from "crypto";

BigInt.prototype.toJSON = function() { return this.toString(); }

const { paymentsApi } = new Client({
    accessToken: process.env.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
  });


export default async function handler(req, res) {
    try{
      if (req.method === 'POST' ) {
        const { result } = await paymentsApi.createPayment({
          idempotencyKey: randomUUID(),
          sourceId: req.body.sourceId,
          amountMoney: {
            currency: 'USD',
            amount: req.body.amountMoney
          }
        })
        console.log('SQUARE RESULT OBJECT')
        console.log(result);
        if(result.errors){

          res.status(400).json(result.errors)

        } else {

          res.status(200).json(result);

        }
      } else {
        res.status(500).send();
      }
  } catch(err){
    res.status(400).json(err)
  }
}


