const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async function sendEmail(req, res) {
    try{
        if(req.method === 'POST'){
            const { body } = req

            const email = body.email
            const subject = body.subject
            const text = body.text
            const html = `<strong>${body.text}</strong>`


            const msg = {
                to: 'test@example.com', // Change to your recipient
                from: email, // Change to your verified sender
                subject: subject,
                text: text,
                html: '<strong>and easy to do anywhere, even with Node.js</strong>',
              }
              sgMail
                .send(msg)
                .then(() => {
                  console.log('Email sent')
                })
                .catch((error) => {
                  console.error(error)
                })


        }
    }catch(err) {
        res.status(400).json(err)
    }
    
}