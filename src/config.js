import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
export const PORT = process.env.PORT
export const GTAG_ID = process.env.GTAG_ID
export const USER_DB = process.env.USER_DB
export const MUSIC_DB = process.env.MUSIC_DB
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
export const REDIS_CONFIG = {
  host: process.env.REDIS_URL,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
}
