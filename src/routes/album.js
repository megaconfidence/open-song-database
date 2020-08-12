import models from '../db'
import { Router } from 'express'

const album = Router()
const pupGenre = { path: 'genre', select: 'name' }

album.get('/:id', async (req, res) => {
  const album = await models.Album.findOne(req.params.id, pupGenre)
  return res.send(album)
})
album.get('/:id/song', async (req, res) => {
  const album = await models.Album.findOne(req.params.id, pupGenre)
  const song = await models.Song.findMany({ album })
  return res.send({ ...album, song })
})

export default album
