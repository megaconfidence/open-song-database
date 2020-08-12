import models from '../db'
import { Router } from 'express'

const song = Router()

song.get('/:id', async (req, res) => {
  const song = await models.Song.findOne(req.params.id)
  return res.send(song)
})

export default song
