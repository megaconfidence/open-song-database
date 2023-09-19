import crud from './crud'
import UserSchema from './model/user'
import SongSchema from './model/song'
import GenreSchema from './model/genre'
import AlbumSchema from './model/album'
import ArtistSchema from './model/artist'

export default {
  User: crud(UserSchema),
  Song: crud(SongSchema),
  Genre: crud(GenreSchema),
  Album: crud(AlbumSchema),
  Artist: crud(ArtistSchema)
}
