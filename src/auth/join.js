import models from '../db'
import { nanoid } from 'nanoid'
import { Router } from 'express'
import {isEmail} from 'validator'

const join = Router()

join.post('/', async (req, res) => {
  const { email, firstname, lastname } = req.body
  if(isEmail(email)) {

    const token = nanoid()
    const data = { email, firstname, lastname, type: 'free', token }
    const user = await models.User.join(data)
  
    return res.send(user)
  }
  return res.status(400).send('Invalid email')
})

export default join
