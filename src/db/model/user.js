import mongoose from 'mongoose'

const User = new mongoose.Schema({
  email: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true
  },
  firstname: {
    trim: true,
    type: String,
    required: true,
    lowercase: true
  },
  lastname: {
    trim: true,
    type: String,
    required: true,
    lowercase: true
  },
  token: {
    unique: true,
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    default: 'free',
    enum: ['free', 'patron'],
  },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('user', User)
