import nodemailer from 'nodemailer'
import mailtemplate from './mailtemplate'
import { EMAIL_ADDRESS, EMAIL_PASSWORD } from '../config'

const mail = async ({ firstname, key, email }) => {
  try {
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const [text, html] = mailtemplate(
      capitalize(firstname),
      key,
      new Date().getFullYear()
    )

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_ADDRESS,
        pass: EMAIL_PASSWORD,
      },
    })

    const info = await transporter.sendMail({
      text,
      html,
      to: email,
      from: EMAIL_ADDRESS,
      subject: 'OSDB API Token',
    })

    return info.messageId
  } catch (error) {
    console.log({ error })
  }
}

export default mail
