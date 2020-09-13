import models from '../db'
import { Router } from 'express'
import { getQuery, handleError, send } from '../utils'

const search = Router()

search.get(
  '/song',
  handleError(async (req, res) => {
    const [_, limit, query] = getQuery(req.query)
    const song = await models.Song.search(query, limit)
    return send(res, song)
  })
)

search.get(
  '/album',
  handleError(async (req, res) => {
    const [_, limit, query] = getQuery(req.query)
    const album = await models.Album.search(query, limit)
    return send(res, album)
  })
)

search.get(
  '/artist',
  handleError(async (req, res) => {
    const [_, limit, query] = getQuery(req.query)
    const artist = await models.Artist.search(query, limit)
    return send(res, artist)
  })
)

export default search
