import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById('root')

// Cuando react-snap pre-renderiza la página, el div#root ya tiene hijos HTML.
// En ese caso usamos hydrateRoot para reutilizar el HTML estático (SSR/SSG).
// En desarrollo (o sin pre-render), usamos createRoot normal.
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
}

// Inicialización y persistencia del consentimiento de cookies (RGPD / YMYL)
if (typeof window !== 'undefined') {
  const initCookieBanner = () => {
    const banner = document.getElementById('cookie-consent-banner')
    if (!banner) return
    const consent = localStorage.getItem('amare_cookie_consent')
    if (!consent) {
      banner.style.display = 'block'
      document.body.classList.add('has-cookie-banner')
    }
    const acceptBtn = document.getElementById('accept-cookies-btn')
    const declineBtn = document.getElementById('decline-cookies-btn')
    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        localStorage.setItem('amare_cookie_consent', 'accepted')
        banner.style.display = 'none'
        document.body.classList.remove('has-cookie-banner')
      })
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        localStorage.setItem('amare_cookie_consent', 'declined')
        banner.style.display = 'none'
        document.body.classList.remove('has-cookie-banner')
      })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieBanner)
  } else {
    initCookieBanner()
  }
}

