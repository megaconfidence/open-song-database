import dotenv from 'dotenv'
if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}
export const PORT = process.env.PORT
export const DB_URL = process.env.DB_URL
export const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
