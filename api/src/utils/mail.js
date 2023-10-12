import { createTransport } from 'nodemailer'
import { SMTP_CONFIG, SMTP_SENDER_ADDRESS } from '../config'

const transporter = createTransport(SMTP_CONFIG)
const mail = async ({ firstname, key, email }) => {
  try {
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const { messageId } = await transporter.sendMail({
      from: SMTP_SENDER_ADDRESS,
      to: email,
      subject: 'Your OSDB API key',
      text: `Hello ${capitalize(firstname)}, \n\nYour API key is ${key}`,
    })

    return messageId
  } catch (error) {
    console.log({ error })
  }
}

export default mail
