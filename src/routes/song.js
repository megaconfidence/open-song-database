import { Router } from 'express'
import { handleError, send, trackEvent } from '../utils'

const song = Router()

song.get(
  '/:id',
  handleError(async (req, res) => {
    const song = await req.Song.findOne(req.params.id)
    await trackEvent('song', 'get', song.name)
    return send(res, song)
  })
)

export default song
