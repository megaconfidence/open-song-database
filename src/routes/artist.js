import models from '../db'
import { Router } from 'express'
import { asyncMap, handleError } from '../utils'

const artist = Router()

artist.get(
  '/:id',
  handleError(async (req, res) => {
    const artist = await models.Artist.findOne(req.params.id)
    return res.json({ data: artist })
  })
)

artist.get(
  '/:id/album',
  handleError(async (req, res) => {
    const artist = await models.Artist.findOne(req.params.id)
    const album = await s.Album.findMany({ artist })
    return res.json({ data: { ...artist, album } })
  })
)

artist.get(
  '/:id/album/song',
  handleError(async (req, res) => {
    const artist = await models.Artist.findOne(req.params.id)
    const album = await models.Album.findMany({ artist })
    const album_song = await asyncMap(album, async (a) => {
      const song = await models.Song.findMany({ album: a._id })
      return { ...a, song }
    })
    return res.json({ data: { ...artist, album: album_song } })
  })
)

export default artist
