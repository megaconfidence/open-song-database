import models from '../db'
import { Router } from 'express'
import getPageLimitQuery from '../utils/getpagelimitquery'

const search = Router()

search.get('/song', async (req, res) => {
  const [_, limit, query] = getPageLimitQuery(req.query)
  const song = await models.Song.search(query, limit)
  return res.send(song)
})

export default search
