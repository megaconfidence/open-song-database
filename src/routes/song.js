import models from '../db'
import { Router } from 'express'
import { handleError } from '../utils'

const song = Router()

song.get(
  '/:id',
  handleError(async (req, res) => {
    const song = await models.Song.findOne(req.params.id)
    return res.json({ data: song })
  })
)

export default song
