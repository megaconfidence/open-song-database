import mongoose from 'mongoose'
import { MUSIC_DB } from '../config'

console.log('hello')
console.log({ MUSIC_DB })

const connect = () => {
  return mongoose.connect(MUSIC_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

export default connect
