const env = process.env.NODE_ENV || 'development'

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dev').config
    break
  case 'prod':
  case 'production':
    envConfig = require('./prod').config
    break
  default:
    envConfig = require('./dev').config
}

export default envConfig
