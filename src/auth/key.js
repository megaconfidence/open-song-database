import { nanoid } from 'nanoid'
import { Router } from 'express'
import { isEmail } from 'validator'
import { mail, handleError, send } from '../utils'

const key = Router()

key.post(
  '/',
  handleError(async (req, res, next) => {
    const { email, firstname, lastname, use } = req.body
    if (isEmail(email) && firstname && lastname && use) {
      const data = { email, firstname, lastname, use, key: nanoid() }
      const user = await req.User.findOrCreate({ email }, data)
      const mailId = await mail(user)
      
      return send(res, { sent: mailId ? true : false, email: user.email })
    }
    return res.status(400).send('Invalid credentials')
  })
)

export default key
