import mongoose from 'mongoose'
import { USER_DB } from '../../config'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

console.log({ USER_DB })
const userDB = mongoose.createConnection(USER_DB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

const User = new mongoose.Schema({
  email: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true,
  },
  firstname: {
    trim: true,
    type: String,
    required: true,
    lowercase: true,
  },
  lastname: {
    trim: true,
    type: String,
    required: true,
    lowercase: true,
  },
  use: {
    trim: true,
    type: String,
    required: true,
    maxlength: 150,
  },
  key: {
    unique: true,
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'free',
    enum: ['free', 'patron'],
  },
  createdAt: { type: Date, default: Date.now },
})

User.plugin(mongooseLeanVirtuals)
export default userDB.model('user', User)
