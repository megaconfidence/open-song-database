import song from './song'
import album from './album'
import artist from './artist'
import search from './search'
import { Router } from 'express'

const routes = Router()

routes.use('/song', song)
routes.use('/album', album)
routes.use('/artist', artist)
routes.use('/search', search)

export default routes
