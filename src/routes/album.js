import models from '../db'
import { Router } from 'express'
import { asyncMap, getQuery, handleError, send } from '../utils'

const album = Router()

album.get(
  '/',
  handleError(async (req, res) => {
    const [page, limit] = getQuery(req.query)
    const album = await models.Album.page(page, limit)
    return send(res, album)
  })
)

album.get(
  '/song',
  handleError(async (req, res) => {
    const [page, limit] = getQuery(req.query)
    const album = await models.Album.page(page, limit)

    const album_song = await asyncMap(album, async (a) => {
      const song = await models.Song.findMany({ album: a._id })
      return { ...a, song }
    })
    return send(res, album_song)
  })
)

album.get(
  '/:id',
  handleError(async (req, res) => {
    const album = await models.Album.findOne(req.params.id)
    return send(res, album)
  })
)

album.get(
  '/:id/song',
  handleError(async (req, res) => {
    const album = await models.Album.findOne(req.params.id)
    const song = await models.Song.findMany({ album })
    return send(res, { ...album, song })
  })
)

export default album
