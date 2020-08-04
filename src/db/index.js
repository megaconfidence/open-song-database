import createModel from './createmodel'
import SongSchema from './model/song'
import GenreSchema from './model/genre'
import AlbumSchema from './model/album'
import ArtistSchema from './model/artist'
import connect from './connect'

;(async () => {
  try {
    await connect()
  } catch (e) {
    console.error(e)
  }
})()

module.exports = {
  Album: createModel(AlbumSchema),
  Artist: createModel(ArtistSchema),
  Genre: createModel(GenreSchema),
  Song: createModel(SongSchema),
}
