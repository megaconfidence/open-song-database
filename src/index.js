import cors from 'cors'
import { validate, join } from './auth'
import morgan from 'morgan'
import express from 'express'
import routes from './routes'
import { PORT } from './config'
import { json, urlencoded } from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'

export const app = express()

app.use(cors())
app.use(json())
app.use(morgan('dev'))
app.use(mongoSanitize())
app.use(urlencoded({ extended: true }))

// Test if server is running
app.get('/', (req, res) => {
  res.json({ ok: true })
})

app.use('/api/:token', validate, routes)
app.use('/join', join)

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/`)
})
