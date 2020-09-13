import typeDefs from './typedefs'
import resolvers from './resolvers'
import { makeExecutableSchema } from 'graphql-tools'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

export default schema
