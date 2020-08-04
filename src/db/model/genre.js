import mongoose from 'mongoose'

const Genre = new mongoose.Schema({
  name: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('genre', Genre);