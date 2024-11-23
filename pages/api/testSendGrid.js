const sgMail = require('@sendgrid/mail')
const apiKey = "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"
sgMail.setApiKey(apiKey)


const subject = 'Hi Californica Nursery'
const text = 'I am testing what emails sent through the contact us page look like'
const name = 'Muzzy Adamjee'
const email = 'ian@californicanursery.com'

const msg = {
  to: 'muzzadamjee@gmail.com', // Change to your recipient
  from: 'californicanursery@gmail.com', // Change to your verified sender
  subject: `Contact Us Message from ${name}`,
  text: 'and easy to do anywhere, even with Node.js',
  html: `<h3>${subject}</h3><strong>${text}</strong><h3>${name}</h3><h3>${email}</h3>`,
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