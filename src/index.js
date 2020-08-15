import app from './app'
import connect from './db/connect'

const start = async () => {
  try {
    await connect()
    app()
  } catch (err) {
    console.log(err)
  }
}

start()