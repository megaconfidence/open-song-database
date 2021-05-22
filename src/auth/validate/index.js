import models from '../../db'
import limiter from './limiter'
import { handleError } from '../../utils'

const auth = handleError(async (req, res, next) => {
  const user = await models.User.findOne({
    key: req.params.key,
  })
  if (!user) return res.status(401).send('Invalid API key')
  if (user.type === 'free') {
    return limiter(req, res, next)
  }
  return next()
})

export default auth
