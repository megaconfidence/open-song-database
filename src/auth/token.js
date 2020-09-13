import { nanoid } from 'nanoid'
import { Router } from 'express'
import { isEmail } from 'validator'
import { mail, handleError, send } from '../utils'

const token = Router()

token.post(
  '/',
  handleError(async (req, res, next) => {
    const { email, firstname, lastname } = req.body
    if (isEmail(email) && firstname && lastname) {
      const data = { email, firstname, lastname, token: nanoid() }
      const user = await req.User.findOrCreate(data)
      const mailId = await mail(user)
      return send(res, { id: mailId, email: user.email })
    }
    return res.status(400).send('Invalid credentials')
  })
)

export default token
