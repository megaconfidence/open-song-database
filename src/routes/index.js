import models from '../db'
import { Router } from 'express'
import asyncMap from '../utils/asyncmap'

const router = Router()

router.get('/artist/:id', async (req, res) => {
  const _with = req.query.with
  const artist = await models.Artist.findOne(req.params.id)

  if (_with === 'album') {
    const album = await models.Album.findMany({ artist })
    return res.send({ ...artist, album })
  } else if (_with === 'album_song') {
    const album = await models.Album.findMany({ artist })

    const album_song = await asyncMap(album, async a => {
      const song = await models.Song.findMany({ album: a._id })
      return { ...a, song }
    })

    return res.send({ ...artist, album: album_song })
  }
  return res.send(artist)
})

export default router
