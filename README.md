# open-song-database
Welcome to the Open Song Database with over 11 million songs 🎉🎉🎉

## Docs
### Generating API Token
To create a user account send a `POST` request to `localhost:4000/join` with the following body
```
{
	"email": "john@doe.com",
	"firstname": "John",
	"lastname": "Doe"
}
```
An email would be sent which contains the API `TOKEN`


### Get Artist Data
To get artist data, which includes albums and songs send the following `GET` request

```
localhost:4000/api/<your-api-token>/artist/<artist-id>/
```
The above returns basic artist information only (i.e artist name)

```
localhost:4000/api/<your-api-token>/artist/<artist-id>/album
```
The above returns both the artist basic information and an array of albums composed by the artist. This includes all relevant album metadata without the songs in the album

```
localhost:4000/api/<your-api-token>/artist/<artist-id>/album/song
```
The above returns artist information, album metadata and the songs in each album


### Get Album Data
To get album data, make the following `GET` request

```
localhost:4000/api/<your-api-token>/album/<album-id>/
```
The above returns album metadata without the songs
```
localhost:4000/api/<your-api-token>/album/<album-id>/song
```
The above returns the album metadata as well as the songs in the album


### Get Song Data
To get the data for a particular song send the following `GET` request
```
localhost:4000/api/<your-api-token>/song/<song-id>/
```

### Paging Albums
You can page through the entire albums in the database by sending a `GET` request to this endpoint
```
localhost:4000/api/<your-api-token>/album?page=<page-number>&limit=<number-of-albums-to-return>
```
Please note that the above request does not return the song data in each album, it only returns an array of album with their metadata. To return an array of albums with their songs, make a request to this endpoint
```
localhost:4000/api/<your-api-token>/album/song?page=<page-number>&limit=<number-of-albums-to-return>
```

### Artist Search
Make the following `GET` request to perform an album search
```
localhost:4000/api/<your-api-token>/search/artist?query=<album-name>&limit=<number-of-search-results-to-return>
```
An array of matching artists excluding their albums and song


### Album Search
To search for albums make the following `GET` request to this endpoint
```
localhost:4000/api/<your-api-token>/search/album?query=<album-name>&limit=<number-of-search-results-to-return>
```
This above returns an array of album metadata. Please note that the songs are not returned


### Song Search
Send the following `GET` request to search for a song
```
localhost:4000/api/<your-api-token>/search/song?query=<song-name>&limit=<number-of-search-results-to-return>
```
The above request returns an array of songs sorted by best match


### Miscellaneous Notes
1. API `TOKEN` is sent to the registered email address
2. The maximum number for the `limit` query parameter is 20. Any value greater than this defaults to 20
3. The maximum number of request per IP is 1000 within a 24 hour period

## Project Road Map
This is the roadmap of the project for the foreseeable future:
- [x] First version release
- [ ] Add demo dataset to repo
- [ ] Write tests
- [ ] Add more API endpoints
- [ ] Fully automate database update with trending songs