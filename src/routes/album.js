import models from '../db'
import { Router } from 'express'
import asyncMap from '../utils/asyncmap'
import getQuery from '../utils/getquery'
import handleError from '../utils/handleerror'

const album = Router()

album.get(
  '/',
  handleError(async (req, res) => {
    const [page, limit] = getQuery(req.query)
    const album = await models.Album.page(page, limit)
    return res.send(album)
  })
)

album.get(
  '/song',
  handleError(async (req, res) => {
    const [page, limit] = getQuery(req.query)
    const album = await models.Album.page(page, limit)

    const album_song = await asyncMap(album, async a => {
      const song = await models.Song.findMany({ album: a._id })
      return { ...a, song }
    })
    return res.send(album_song)
  })
)

album.get(
  '/:id',
  handleError(async (req, res) => {
    const album = await models.Album.findOne(req.params.id)
    return res.send(album)
  })
)

album.get(
  '/:id/song',
  handleError(async (req, res) => {
    const album = await models.Album.findOne(req.params.id)
    const song = await models.Song.findMany({ album })
    return res.send({ ...album, song })
  })
)

export default album
