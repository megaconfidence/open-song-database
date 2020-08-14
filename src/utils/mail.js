import nodemailer from 'nodemailer'
import { EMAIL_ADDRESS, EMAIL_PASSWORD } from '../config'

const mail = async ({ firstname, token, email }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD
      }
    })

    const info = await transporter.sendMail({
      to: email,
      from: EMAIL_ADDRESS,
      subject: 'OSDB API Token',
      text: `
      ************
      Hi ${firstname},
      ************
  
      Yor API TOKEN is: ${token}
      Thanks for using The Open Song Database API
  
      (If you did not make this request please disregard this email)
  
      © ${new Date().getFullYear()} osdbapi.com. All rights reserved.
      `,
      html: `
      <h3>Hi ${firstname},</h3>
      
      <p>Yor API TOKEN is: <strong><em>${token}</em></strong></p>
      <p>Thanks for using The Open Song Database API</p>
      </br></br>
      <p>(If you did not make this request please disregard this email)</p>
      <p>&copy; ${new Date().getFullYear()} osdbapi.com. All rights reserved.</p>
      `
    })

    console.log(`Token sent: ${info.messageId}`)
  } catch (err) {
    console.log(err)
  }
}

export default mail
