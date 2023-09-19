import { Router } from 'express'
import { getQuery, handleError, send, trackEvent } from '../utils'

const search = Router()

search.get(
  '/song',
  handleError(async (req, res) => {
    const [_, limit, query] = getQuery(req.query)
    const song = await req.Song.search(query, limit)

    await trackEvent('search', `get ${req.route.path}`, query)
    return send(res, song)
  })
)

search.get(
  '/album',
  handleError(async (req, res) => {
    const [_, limit, query] = getQuery(req.query)
    const album = await req.Album.search(query, limit)

    await trackEvent('search', `get ${req.route.path}`, query)
    return send(res, album)
  })
)

search.get(
  '/artist',
  handleError(async (req, res) => {
    const [_, limit, query] = getQuery(req.query)
    const artist = await req.Artist.search(query, limit)
    
    await trackEvent('search', `get ${req.route.path}`, query)
    return send(res, artist)
  })
)

export default search
