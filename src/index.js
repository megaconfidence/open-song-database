import cors from 'cors'
import models from './db'
import morgan from 'morgan'
import express from 'express'
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

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}/`)
})
