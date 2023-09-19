import { ServerClient } from 'postmark'
import { POSTMARK_TOKEN } from '../config'

const pmClient = new ServerClient(POSTMARK_TOKEN)

const mail = async ({ firstname, key, email }) => {
  try {
    const capitalize = (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }

    const { Message } = await pmClient.sendEmailWithTemplate({
      To: email,
      TemplateAlias: 'api-key',
      From: 'support@osdbapi.com',
      TemplateModel: {
        api_key: key,
        first_name: capitalize(firstname),
      },
    })

    return Message
  } catch (error) {
    console.log({ error })
  }
}

export default mail
