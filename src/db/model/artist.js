import mongoose from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

const Artist = new mongoose.Schema({
  name: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true,
  },
  url: {
    trim: true,
    type: String,
    required: true,
  },
  cover: {
    trim: true,
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
})
Artist.plugin(mongooseLeanVirtuals)
export default mongoose.model('artist', Artist)
