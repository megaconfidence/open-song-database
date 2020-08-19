import cors from 'cors'
import path from 'path'
import morgan from 'morgan'
import express from 'express'
import routes from './routes'
import { PORT } from './config'
import { validate, join } from './auth'
import { json, urlencoded } from 'body-parser'
import { handleError, analytics } from './utils'
import mongoSanitize from 'express-mongo-sanitize'

const app = express()

app.use(cors())
app.use(json())
app.use(morgan('dev'))
app.use(mongoSanitize())
app.use(urlencoded({ extended: true }))
app.use(analytics)

app.use('/', express.static(path.join(__dirname, 'html')))
app.use('/join', join)
app.use('/api/:token', validate, routes)
app.use('*', express.static(path.join(__dirname, 'html')))

app.use((err, req, res, next) => {
  console.log(err.stack)
  return res.status(500).end()
})

export default () => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/`)
  })
}
