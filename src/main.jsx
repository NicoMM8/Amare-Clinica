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

