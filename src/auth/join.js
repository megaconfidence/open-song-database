import models from '../db'
import { nanoid } from 'nanoid'
import { Router } from 'express'
import mail from '../utils/mail'
import { isEmail } from 'validator'

const join = Router()

join.post('/', async (req, res) => {
  const { email, firstname, lastname } = req.body
  if (isEmail(email)) {
    const data = { email, firstname, lastname, token: nanoid() }
    const user = await models.User.join(data)
    await mail(user)

    return res.send(user)
  }
  return res.status(400).send('Invalid email')
})

export default join
