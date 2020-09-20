import mongoose from 'mongoose'
import { MUSIC_DB } from '../config'

const connect = () => {
  return mongoose.connect(MUSIC_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

export default connect
