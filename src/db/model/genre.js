import mongoose from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

const Genre = new mongoose.Schema({
  name: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: { type: Date, default: Date.now },
})
Genre.plugin(mongooseLeanVirtuals)
export default mongoose.model('genre', Genre)
