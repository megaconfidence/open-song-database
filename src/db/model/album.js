import mongoose from 'mongoose'
import mongooseLeanVirtuals from 'mongoose-lean-virtuals'

const Album = new mongoose.Schema(
  {
    cover: {
      trim: true,
      type: String,
    },
    name: {
      trim: true,
      type: String,
      required: true,
      lowercase: true,
    },
    year: {
      trim: true,
      type: String,
    },
    url: {
      trim: true,
      type: String,
      required: true,
    },
    genre: [
      {
        ref: 'genre',
        type: mongoose.SchemaTypes.ObjectId,
      },
    ],
    artist: [
      {
        ref: 'artist',
        type: mongoose.SchemaTypes.ObjectId,
      },
    ],
    createdAt: { type: Date, default: Date.now },
  },
  { toJSON: { virtuals: true } }
)
Album.plugin(mongooseLeanVirtuals);
Album.index({ artist: 1, name: 1 }, { unique: true })
export default mongoose.model('album', Album)
