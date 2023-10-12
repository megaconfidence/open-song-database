import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
export const PORT = process.env.PORT
export const GTAG_ID = process.env.GTAG_ID
export const USER_DB = process.env.USER_DB
export const MUSIC_DB = process.env.MUSIC_DB
export const BUGSNAG_KEY = process.env.BUGSNAG_KEY
export const FRONTEND_URL = process.env.FRONTEND_URL
export const PLAUSIBLE_URL = process.env.PLAUSIBLE_URL
export const REDIS_CONFIG = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
}
export const SMTP_SENDER_ADDRESS = process.env.SMTP_SENDER_ADDRESS
export const SMTP_CONFIG = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
}
