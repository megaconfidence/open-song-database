import fetch from 'node-fetch'
import { FRONTEND_URL, GTAG_ID, PLAUSIBLE_URL } from '../config'

const trackEvent = async (category, action, label, value = 1) => {
  try {
    await fetch(`${PLAUSIBLE_URL}/api/event`, {
      method: 'POST',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (X11; U; Linux i686; en; rv:1.8.1.12) Gecko/20080208 (Debian-1.8.1.12-2) Epiphany/2.20',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'pageview',
        url: `${FRONTEND_URL}/apievents/${category}/${action.replace(
          ' ',
          '/'
        )}/${label}/${value}`,
        domain: FRONTEND_URL.split('://')[1],
      }),
    })
  } catch (e) {
    console.log(e.message)
  }
}

export default trackEvent
