import { Router } from 'express'
import { asyncMap } from '@cokoghenun/async-iterator'
import { getQuery, handleError, send, trackEvent } from '../utils'

const album = Router()

album.get(
  '/',
  handleError(async (req, res) => {
    const [page, limit] = getQuery(req.query)
    const album = await req.Album.page(page, limit)

    await trackEvent('album', `get ${req.route.path}`, album?.name)
    return send(res, album)
  })
)

album.get(
  '/song',
  handleError(async (req, res) => {
    const [page, limit] = getQuery(req.query)
    const album = await req.Album.page(page, limit)

    const album_song = await asyncMap(album, async (a) => {
      const song = await req.Song.findMany({ album: a._id })
      return { ...a, song }
    })

    await trackEvent('album', `get ${req.route.path}`, album?.name)
    return send(res, album_song)
  })
)

album.get(
  '/:id',
  handleError(async (req, res) => {
    const album = await req.Album.findOne(req.params.id)

    await trackEvent('album', `get ${req.route.path}`, album?.name)
    return send(res, album)
  })
)

album.get(
  '/:id/song',
  handleError(async (req, res) => {
    const album = await req.Album.findOne(req.params.id)
    const song = await req.Song.findMany({ album })

    await trackEvent('album', `get ${req.route.path}`, album?.name)
    return send(res, { ...album, song })
  })
)

export default album
