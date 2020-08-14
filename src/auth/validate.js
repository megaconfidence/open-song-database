import models from '../db'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  max: 10,
  windowMs: 5 * 60 * 1000,
  // windowMs: 24 * 60 * 60 * 1000,
  message: 'Too many requests, please try again in 24 hours.'
})

const auth = async (req, res, next) => {
  const { token } = req.params
  const user = await models.User.findOne({ token })
  if (!user) return res.status(401).send('Invalid token')
  if (user.type === 'free') {
    return limiter(req, res, next)
  }
  return next()
}

export default auth
