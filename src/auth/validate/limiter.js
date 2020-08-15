import redis from 'ioredis'
import redisStore from 'rate-limit-redis'
import rateLimit from 'express-rate-limit'
import { REDIS_CONFIG } from '../../config'

const limiter = rateLimit({
  max: 1000,
  delayMs: 0,
  store: new redisStore({
    expiry: 24 * 60 * 60,
    client: new redis(REDIS_CONFIG),
  }),
  message: 'Too many requests, please try again in 24 hours.'
})

export default limiter
