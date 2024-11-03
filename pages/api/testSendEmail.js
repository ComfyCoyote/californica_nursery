const sgMail = require('@sendgrid/mail')


const API_KEY="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"
sgMail.setApiKey(API_KEY)

const msg = {
  to: 'muzzadamjee@gmail.com', // Change to your recipient
  from: 'californicanursery@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
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