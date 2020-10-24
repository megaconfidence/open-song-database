import redis from 'ioredis'
import redisStore from 'rate-limit-redis'
import rateLimit from 'express-rate-limit'
import { REDIS_URL } from '../../config'

const max = 1000

const limiter = rateLimit({
  max,
  delayMs: 0,
  store: new redisStore({
    expiry: 24 * 60 * 60,
    client: new redis(REDIS_URL),
  }),
  message: {
    error: `You have exhausted your free ${max} request quota, please try again in 24 hours or consider upgrading`,
  },
})

export default limiter
