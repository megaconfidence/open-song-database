import models from '../db'
import { Router } from 'express'
import { handleError, send } from '../utils'

const song = Router()

song.get(
  '/:id',
  handleError(async (req, res) => {
    const song = await models.Song.findOne(req.params.id)
    return send(res, song)
  })
)

export default song
