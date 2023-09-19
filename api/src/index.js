import server from './server'
import connect from './db/connect'

const start = async () => {
  try {
    await connect()
    server()
  } catch (error) {
    console.log({ error })
  }
}

start()
