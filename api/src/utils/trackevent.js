import fetch from 'node-fetch'
import { GTAG_ID } from '../config'

const trackEvent = (category, action, label, value=1) => {
  return fetch(
    `http://www.google-analytics.com/collect?v=1&cid=555&t=event&tid=${GTAG_ID}&dp=%2F${category}&ec=${category}&ea=${action}&el=${label}&ev=${value}`,
    {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
    }
  )
}

export default trackEvent
