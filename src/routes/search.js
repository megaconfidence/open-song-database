import models from '../db'
import { Router } from 'express'
import getPageLimitQuery from '../utils/getpagelimitquery'

const search = Router()

search.get('/song', async (req, res) => {
  const [_, limit, query] = getPageLimitQuery(req.query)
  const song = await models.Song.search(query, limit)
  return res.send(song)
})

search.get('/album', async (req, res) => {
  const [_, limit, query] = getPageLimitQuery(req.query)
  const album = await models.Album.search(query, limit)
  return res.send(album)
})

search.get('/artist', async (req, res) => {
  const [_, limit, query] = getPageLimitQuery(req.query)
  const artist = await models.Artist.search(query, limit)
  return res.send(artist)
})

export default search
