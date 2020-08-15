import models from '../db'
import { Router } from 'express'
import handleError from '../utils/handleerror'

const song = Router()

song.get(
  '/:id',
  handleError(async (req, res) => {
    const song = await models.Song.findOne(req.params.id)
    return res.send(song)
  })
)

export default song
