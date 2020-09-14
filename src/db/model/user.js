import mongoose from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

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
export default mongoose.model('user', User)
