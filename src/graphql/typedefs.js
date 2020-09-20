const typeDefs = `
  input PageInput {
    page: Int!
    limit: Int!
  }

  input SearchInput {
    limit: Int!
    query: String!
  }

  type Album {
    id: ID
    name: String
    year: String
    song: [Song]
    cover: String
    genre: [Genre]
    artist: [Artist]
  }
  
  type Artist {
    id: ID
    name: String
    cover: String
    album: [Album]
  }

  type Genre {
    id: ID
    name: String
  }

  type Song {
    id: ID
    album: Album
    name: String
    duration: String
    artist: [Artist]!
  }

  type Query {
    song(id: ID!): Song!
    album(id: ID!): Album!
    artist(id: ID!): Artist!
    albums(input: PageInput!): [Album]!
    searchSong(input: SearchInput!): [Song]!
    searchAlbum(input: SearchInput!): [Album]!
    searchArtist(input: SearchInput!): [Artist]!
  }
`
export default typeDefs
