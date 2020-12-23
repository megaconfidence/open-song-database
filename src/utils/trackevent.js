import fetch from 'node-fetch'
import { GTAG_ID } from '../config'

const trackEvent = (category, action, label, value) => {
  return fetch(
    `http://www.google-analytics.com/collect?v=1&cid=555&t=event&tid=${GTAG_ID}&dp=%2F${category}&ec=${category}&ea=${action}&el=${label}`,
    {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:84.0) Gecko/20100101 Firefox/84.0',
      },
    }
  )
}

export default trackEvent
