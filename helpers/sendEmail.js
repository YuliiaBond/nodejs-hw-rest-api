const nodemailer = require('nodemailer')
require('dotenv').config()

const { EMAIL_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'bondarenko047@meta.ua',
    pass: EMAIL_PASSWORD
  }
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendEmail = async (data) => {
  const newEmail = {
    ...data,
    from: 'bondarenko047@meta.ua'
  }
  await transporter.sendMail(newEmail)
}

module.exports = sendEmail
