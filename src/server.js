import cors from 'cors'
import models from './db'
import morgan from 'morgan'
import routes from './routes'
import express from 'express'
import schema from './graphql'
import { PORT, FRONTEND_URL } from './config'
import { validate, key } from './auth'
import depthLimit from 'graphql-depth-limit'
import { graphqlHTTP } from 'express-graphql'
import { json, urlencoded } from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'

const modelfy = (req, _, next) => {
  for (const model in models) {
    req[model] = models[model]
  }
  return next()
}
const gqlConfig = {
  schema,
  graphiql: true,
  context: { ...models },
  validationRules: [depthLimit(5)],
}

const server = express()

server.use(cors())
server.use(json())
server.use(morgan('dev'))
server.use(mongoSanitize())
server.use(urlencoded({ extended: true }))

server.get('/', (_, res) => res.redirect(FRONTEND_URL))
server.use('/key', modelfy, key)
server.use('/rest/:key', validate, modelfy, routes)
server.use('/graphql/:key', validate, graphqlHTTP(gqlConfig))

server.use((err, _, res, __) => {
  console.log({ error: err.stack })
  return res.status(500).end()
})

export default () => {
  server.listen(PORT, () => {
    console.log(`🚀 REST server at http://localhost:${PORT}/rest`)
    console.log(`🚀 GRAPHQL server at http://localhost:${PORT}/graphql`)
  })
}
