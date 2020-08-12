import song from './song'
import album from './album'
import artist from './artist'
import { Router } from 'express'

const routes = Router()

routes.use('/song', song)
routes.use('/album', album)
routes.use('/artist', artist)

export default routes
