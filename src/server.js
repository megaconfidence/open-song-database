import cors from 'cors'
import models from './db'
import morgan from 'morgan'
import routes from './routes'
import express from 'express'
import schema from './graphql'
import { PORT } from './config'
import analytics from './analytics'
import { validate, join } from './auth'
import { graphqlHTTP } from 'express-graphql'
import { json, urlencoded } from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'

const server = express()

server.use(cors())
server.use(json())
server.use(morgan('dev'))
server.use(mongoSanitize())
server.use(urlencoded({ extended: true }))
server.use(analytics)

server.use('/join', join)
server.use('/rest/:token', validate, routes)
server.use(
  '/graphql/:token',
  validate,
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { ...models },
  })
)

server.get('*', (_, res) => {
  res.redirect('https://www.osdbapi.com')
})

server.use((err, req, res, next) => {
  console.log({ error: err.stack })
  return res.status(500).end()
})

export default () => {
  server.listen(PORT, () => {
    console.log(`🚀 REST server at http://localhost:${PORT}/`)
    console.log(`🚀 GRAPHQL server at http://localhost:${PORT}/graphql`)
  })
}
