import mongoose from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

const Song = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: true,
    lowercase: true,
  },
  duration: {
    trim: true,
    type: String,
  },
  playId: {
    trim: true,
    type: String,
  },
  album: {
    ref: 'album',
    type: mongoose.SchemaTypes.ObjectId,
  },
  createdAt: { type: Date, default: Date.now },
})

Song.plugin(mongooseLeanVirtuals)
Song.index({ album: 1, name: 1 }, { unique: true })
export default mongoose.model('song', Song)
