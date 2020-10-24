import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
export const PORT = process.env.PORT
export const GTAG_ID = process.env.GTAG_ID
export const USER_DB = process.env.USER_DB
export const MUSIC_DB = process.env.MUSIC_DB
export const POSTMARK_TOKEN = process.env.POSTMARK_TOKEN
export const REDIS_CONFIG = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
}
