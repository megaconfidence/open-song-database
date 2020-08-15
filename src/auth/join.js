import models from '../db'
import { nanoid } from 'nanoid'
import mail from '../utils/mail'
import { Router } from 'express'
import { isEmail } from 'validator'
import handleError from '../utils/handleerror'

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
      return res.send(user)
    }
    return res.status(400).send('Invalid credentials')
  })
)

export default join
