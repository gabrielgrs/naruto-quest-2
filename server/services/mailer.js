const nodemailer = require('nodemailer')

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail({ from, message, subject }) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'grxgabriel@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  })

  if (!message) throw new Error('Message is required')

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: from || '"Fred Foo 👻" <foo@example.com>', // sender address
    to: 'grxgabriel@gmail.com', // list of receivers
    subject: subject, // Subject line
    text: message
  })

  return {
    previewUrl: nodemailer.getTestMessageUrl(info),
    ...info
  }
}

module.exports = {
  sendEmail
}
