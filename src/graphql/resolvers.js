import { trackEvent } from '../utils'

const resolvers = {
  Query: {
    async album(_, { id }, { Album }) {
      const album = await Album.findOne(id)
      await trackEvent('album', `graphql album`, album.name)
      return album
    },
    async albums(_, { input: { page, limit } }, { Album }) {
      await trackEvent(
        'album',
        `graphql album`,
        'page',
        `page: ${page} limit:${limit}`
      )
      return Album.page(page, limit)
    },
    async artist(_, { id }, { Artist }) {
      const artist = await Artist.findOne(id)
      await trackEvent('artist', `graphql artist`, artist.name)
      return artist
    },
    async song(_, { id }, { Song }) {
      const song = await Song.findOne(id)
      await trackEvent('song', `graphql song`, song.name)
      return song
    },
    async searchSong(_, { input: { query, limit } }, { Song }) {
      await trackEvent(
        'song',
        `graphql song`,
        'search',
        `query: ${query} limit:${limit}`
      )
      return Song.search(query, limit)
    },
    async searchAlbum(_, { input: { query, limit } }, { Album }) {
      await trackEvent(
        'album',
        `graphql album`,
        'search',
        `query: ${query} limit:${limit}`
      )
      return Album.search(query, limit)
    },
    async searchArtist(_, { input: { query, limit } }, { Artist }) {
      await trackEvent(
        'artist',
        `graphql artist`,
        'search',
        `query: ${query} limit:${limit}`
      )
      return Artist.search(query, limit)
    },
  },
  Album: {
    song(album, _, { Song }) {
      return Song.findMany({ album: album._id })
    },
    artist(album, _, { Artist }) {
      return Artist.findMany({ _id: album.artist })
    },
    genre(album, _, { Genre }) {
      return Genre.findMany({ _id: album.genre })
    },
  },
  Artist: {
    album(artist, _, { Album }) {
      return Album.findMany({ artist: [artist._id] })
    },
  },
  Song: {
    album(song, _, { Album }) {
      return Album.findOne(song.album)
    },
    async artist(song, _, { Album, Artist }) {
      const album = await Album.findOne(song.album)
      return Artist.findMany({ _id: album.artist })
    },
  },
}

export default resolvers
