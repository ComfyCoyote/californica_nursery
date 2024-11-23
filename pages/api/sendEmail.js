const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export default async function sendEmail(req, res) {
    try{
        if(req.method === 'POST'){
            const { body } = req

            const email = body.email
            const subject = body.subject
            const text = body.message
            const name = body.name


            const msg = {
              to: 'muzzadamjee@gmail.com', // Change to your recipient
              from: 'californicanursery@gmail.com', // Change to your verified sender
              subject: `Contact Us Message from ${name}`,
              text: text,
              html: `<h3>${subject}</h3><strong>${text}</strong><h3>${name}</h3><h3>${email}</h3>`,
            }
              sgMail
                .send(msg)
                .then(() => {
                 res.status(200).json({message: 'Email sent'})
                })
                


        }
    } catch(err) {
        res.status(400).json(err)
    }
    
}