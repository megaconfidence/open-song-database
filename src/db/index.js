import createModel from './createmodel'
import SongSchema from './model/song'
import GenreSchema from './model/genre'
import AlbumSchema from './model/album'
import ArtistSchema from './model/artist'
import connect from './connect'
import fetch from 'node-fetch'

;(async () => {
  await connect();
})()

module.exports = {
  fetch,
  Album: createModel(AlbumSchema),
  Artist: createModel(ArtistSchema),
  Genre: createModel(GenreSchema),
  Song: createModel(SongSchema),
}
