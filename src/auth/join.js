import models from '../db'
import { nanoid } from 'nanoid'
import { Router } from 'express'
import { isEmail } from 'validator'
import { mail, handleError } from '../utils'

const join = Router()

join.post(
  '/',
  handleError(async (req, res, next) => {
    const { email, firstname, lastname } = req.body
    if (isEmail(email) && firstname && lastname) {
      const data = { email, firstname, lastname, token: nanoid() }
      const user = await models.User.join(data)
      const mailId = await mail(user)

      console.log(`mail sent: ${mailId}`)
      return res.send({ email: user.email })
    }
    return res.status(400).send('Invalid credentials')
  })
)

export default join
