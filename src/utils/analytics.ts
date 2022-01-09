import ReactGA from 'react-ga4'
import {Router} from 'next/router'

export const initGA = (UA: string) => {
  if (UA && process.browser) {
    ReactGA.initialize(UA)
    logPageViews()
  }
}
export const logPageView = () => {
  ReactGA.set({page: window.location.pathname})
  ReactGA.pageview(window.location.pathname)
}
export const logEvent = (category = '', action = '', label = '') => {
  if (category && action) {
    ReactGA.event({category, action, label})
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA._gtag('event', 'exception', {description, fatal})
  }
}

export function logPageViews() {
  logPageView()
  Router.events.on('routeChangeComplete', () => logPageView())
}
