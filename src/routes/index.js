import models from '../db'
import { Router } from 'express'
import asyncMap from '../utils/asyncmap'

const router = Router()

router.get('/artist/:id', async (req, res) => {
  const _with = req.query.with
  const pupGenre = { path: 'genre', select: 'name' }
  const artist = await models.Artist.findOne(req.params.id)

  if (_with === 'album') {
    const album = await models.Album.findMany({ artist }, pupGenre)
    return res.send({ ...artist, album })
  } else if (_with === 'album_song') {
    const album = await models.Album.findMany({ artist }, pupGenre)

    const album_song = await asyncMap(album, async a => {
      const song = await models.Song.findMany({ album: a._id })
      return { ...a, song }
    })

    return res.send({ ...artist, album: album_song })
  }
  return res.send(artist)
})

router.get('/album/:id', async (req, res) => {
  const _with = req.query.with
  const pupGenre = { path: 'genre', select: 'name' }
  const album = await models.Album.findOne(req.params.id, pupGenre)

  if (_with === 'song') {
    const song = await models.Song.findMany({ album })
    return res.send({ ...album, song })
  }
  return res.send(album)
})

export default router
