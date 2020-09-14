import { nanoid } from 'nanoid'
import { Router } from 'express'
import { isEmail } from 'validator'
import { mail, handleError, send } from '../utils'

const key = Router()

key.post(
  '/',
  handleError(async (req, res, next) => {
    const { email, firstname, lastname } = req.body
    if (isEmail(email) && firstname && lastname) {
      const data = { email, firstname, lastname, key: nanoid() }
      const user = await req.User.findOrCreate({ email }, data)
      const mailId = await mail(user)
      return send(res, { id: mailId, email: user.email })
    }
    return res.status(400).send('Invalid credentials')
  })
)

export default key
