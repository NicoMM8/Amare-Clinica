/**
 * remove-hero-bg.mjs
 * Elimina el fondo de hero-therapist.jpg para usarla como cutout en el hero
 * Usa una máscara por luminosidad + detección de fondo uniforme
 */

import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const input  = path.resolve(__dirname, 'public/images/hero-therapist.jpg')
const output = path.resolve(__dirname, 'public/images/hero-therapist-cutout.png')

async function removeBackground() {
  console.log('🖼️  Procesando foto de la terapeuta...')

  const { data, info } = await sharp(input)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info
  const pixels = new Uint8Array(data)

  // La foto tiene fondo de interiores cálido (beige/crema/ladrillo).
  // Estrategia: eliminar píxeles del borde exterior que sean cálidos y claros.
  // Hacemos flood-fill desde los 4 bordes para solo afectar el fondo, no la persona.

  const visited = new Uint8Array(width * height)
  const queue = []

  function idx(x, y) { return y * width + x }
  function pixIdx(x, y) { return (y * width + x) * channels }

  // Función para determinar si un píxel es "fondo" (cálido claro o neutro claro)
  function isBackground(x, y) {
    const p = pixIdx(x, y)
    const r = pixels[p], g = pixels[p+1], b = pixels[p+2]
    const brightness = (r + g + b) / 3
    // Fondo: píxeles claros (luminosidad > 160) con saturación baja o cálida
    const maxC = Math.max(r, g, b)
    const minC = Math.min(r, g, b)
    const saturation = maxC === 0 ? 0 : (maxC - minC) / maxC
    return brightness > 155 && saturation < 0.45
  }

  // Sembrar el flood-fill desde los 4 bordes
  for (let x = 0; x < width; x++) {
    if (isBackground(x, 0))       { queue.push(idx(x, 0));        visited[idx(x, 0)] = 1 }
    if (isBackground(x, height-1)){ queue.push(idx(x, height-1)); visited[idx(x, height-1)] = 1 }
  }
  for (let y = 0; y < height; y++) {
    if (isBackground(0, y))       { queue.push(idx(0, y));        visited[idx(0, y)] = 1 }
    if (isBackground(width-1, y)) { queue.push(idx(width-1, y));  visited[idx(width-1, y)] = 1 }
  }

  // BFS flood-fill
  let head = 0
  while (head < queue.length) {
    const pos = queue[head++]
    const x = pos % width
    const y = Math.floor(pos / width)

    // Hacer transparente
    const p = pos * channels
    pixels[p + 3] = 0

    // Vecinos 4-conexión
    const neighbors = [
      [x-1, y], [x+1, y], [x, y-1], [x, y+1]
    ]
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue
      const nidx = idx(nx, ny)
      if (!visited[nidx] && isBackground(nx, ny)) {
        visited[nidx] = 1
        queue.push(nidx)
      }
    }
  }

  // Suavizar bordes: semitransparencia en píxeles adyacentes al fondo eliminado
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const p = pixIdx(x, y)
      if (pixels[p + 3] === 255) {
        // Si algún vecino es transparente, suavizar borde
        const neighbors = [pixIdx(x-1,y), pixIdx(x+1,y), pixIdx(x,y-1), pixIdx(x,y+1)]
        const hasTransparentNeighbor = neighbors.some(np => pixels[np + 3] === 0)
        if (hasTransparentNeighbor) {
          pixels[p + 3] = 200 // ligera semitransparencia en el borde
        }
      }
    }
  }

  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels }
  })
    .png({ compressionLevel: 9 })
    .toFile(output)

  console.log(`✅  Cutout guardado → public/images/hero-therapist-cutout.png`)
  console.log(`    ${width}×${height}px`)
}

removeBackground().catch(err => {
  console.error('❌', err.message)
  process.exit(1)
})
