import cors from 'cors'
import models from './db'
import morgan from 'morgan'
import routes from './routes'
import express from 'express'
import schema from './graphql'
import Bugsnag from '@bugsnag/js'
import { validate, key } from './auth'
import depthLimit from 'graphql-depth-limit'
import { graphqlHTTP } from 'express-graphql'
import { json, urlencoded } from 'body-parser'
import mongoSanitize from 'express-mongo-sanitize'
import { PORT, FRONTEND_URL, BUGSNAG_KEY } from './config'
import BugsnagPluginExpress from '@bugsnag/plugin-express'

// Bugsnag.start({
//   apiKey: BUGSNAG_KEY,
//   plugins: [BugsnagPluginExpress],
// })

// const bugsnagMidWer = Bugsnag.getPlugin('express')

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
// server.use(bugsnagMidWer.requestHandler)

server.get('/', (_, res) => res.redirect(FRONTEND_URL))
server.use('/key', modelfy, key)

//cors rule for playground endpoints
const whitelist = [FRONTEND_URL]
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

//playground endpoints
server.use('/rest/playgroundkey', cors(corsOptions), modelfy, routes)
server.use('/graphql/playgroundkey', cors(corsOptions), graphqlHTTP(gqlConfig))

//production endpoints
server.use('/rest/:key', validate, modelfy, routes)
server.use('/graphql/:key', validate, graphqlHTTP(gqlConfig))

server.use((err, _, res, __) => {
  console.log({ error: err.stack })
  return res.status(500).end()
})
// server.use(bugsnagMidWer.errorHandler)

export default () => {
  server.listen(PORT, () => {
    console.log(`🚀 REST server at http://localhost:${PORT}/rest`)
    console.log(`🚀 GRAPHQL server at http://localhost:${PORT}/graphql`)
  })
}
