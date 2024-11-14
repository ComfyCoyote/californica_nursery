const sgMail = require('@sendgrid/mail')
const apiKey = "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"
sgMail.setApiKey(apiKey)
console.log(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'muzzadamjee@gmail.com', // Change to your recipient
  from: 'californicanursery@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then((val) => {
    console.log(val)
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })