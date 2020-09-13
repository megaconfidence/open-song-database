const resolvers = {
  Query: {
    album(_, { id }, { Album }) {
      return Album.findOne(id)
    },
    albums(_, { input: { page, limit } }, { Album }) {
      return Album.page(page, limit)
    },
    artist(_, { id }, { Artist }) {
      return Artist.findOne(id)
    },
    song(_, { id }, { Song }) {
      return Song.findOne(id)
    },
    searchSong(_, { input: { query, limit } }, { Song }) {
      return Song.search(query, limit)
    },
    searchAlbum(_, { input: { query, limit } }, { Album }) {
      return Album.search(query, limit)
    },
    searchArtist(_, { input: { query, limit } }, { Artist }) {
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
