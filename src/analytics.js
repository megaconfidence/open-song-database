import fetch from 'node-fetch'
import { GTAG_ID } from './config'

const analytics = async ({ url }, res, next) => {
  if (url.startsWith('/api')) {
    try {
      const route = url.split('/')[3]
      await fetch(
        `https://www.google-analytics.com/collect?v=1&t=event&tid=${GTAG_ID}&cid=555&dp=%2F${route}&ec=route_run&ea=hit&el=run`,
        {
          headers: {
            'user-agent':
              'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
          },
        }
      )
    } catch (error) {
      console.log({error})
    }
  }
  return next()
}

export default analytics
