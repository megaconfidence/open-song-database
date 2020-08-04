import mongoose from 'mongoose'
import { DB_URL } from '../config'

export default (url = DB_URL, opts = {}) => {
  return mongoose.connect(url, {
    ...opts,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
}
