/**
 * entry-server.jsx — Entry point para el SSR/SSG build de Vite
 * 
 * Este archivo es el punto de entrada para el proceso de pre-rendering.
 * Exporta una función `render()` que devuelve el HTML del App como string.
 * Solo se ejecuta en Node.js durante el build — nunca en el navegador.
 */

import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

/**
 * Renderiza la app completa a HTML estático.
 * @returns {string} HTML de la aplicación
 */
export function render(url = '/') {
  return renderToString(
    <React.StrictMode>
      <App initialPath={url} />
    </React.StrictMode>
  )
}
