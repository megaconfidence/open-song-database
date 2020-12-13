import { Router } from 'express'
import { asyncMap, handleError, send, trackEvent } from '../utils'

const artist = Router()

artist.get(
  '/:id',
  handleError(async (req, res) => {
    const artist = await req.Artist.findOne(req.params.id)

    await trackEvent('artist', `get ${req.route.path}`, artist.name)
    return send(res, artist)
  })
)

artist.get(
  '/:id/album',
  handleError(async (req, res) => {
    const artist = await req.Artist.findOne(req.params.id)
    const album = await req.Album.findMany({ artist })

    await trackEvent('artist', `get ${req.route.path}`, artist.name)
    return send(res, { ...artist, album })
  })
)

artist.get(
  '/:id/album/song',
  handleError(async (req, res) => {
    const artist = await req.Artist.findOne(req.params.id)
    const album = await req.Album.findMany({ artist })
    const album_song = await asyncMap(album, async (a) => {
      const song = await req.Song.findMany({ album: a._id })
      return { ...a, song }
    })

    await trackEvent('artist', `get ${req.route.path}`, artist.name)
    return send(res, { ...artist, album: album_song })
  })
)

export default artist
