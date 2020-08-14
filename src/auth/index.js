import rateLimit from 'express-rate-limit'

export const auth = (req, res, next) => {
  // console.log('auth', req.params)
  req.token = req.params
  next()
}

export const limiter = rateLimit({
  max: 500,
  windowMs: 24 * 60 * 60 * 1000,
  message: 'Too many requests, please try again in 24 hours.'
})
