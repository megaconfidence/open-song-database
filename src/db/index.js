import createModel from './createmodel'
import SongSchema from './model/song'
import GenreSchema from './model/genre'
import AlbumSchema from './model/album'
import ArtistSchema from './model/artist'
import UserSchema from './model/user'
import connect from './connect'

;(async () => {
  try {
    await connect()
  } catch (e) {
    console.error(e)
  }
})()

module.exports = {
  User: createModel(UserSchema),
  Song: createModel(SongSchema),
  Genre: createModel(GenreSchema),
  Album: createModel(AlbumSchema),
  Artist: createModel(ArtistSchema),
}
