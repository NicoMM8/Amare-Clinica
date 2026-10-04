/**
 * remove-logo-bg.mjs
 * Elimina el fondo claro (casi blanco/gris) del logo PNG de Centro Amaré
 * y guarda la versión con fondo transparente como logo-transparent.png
 */

import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const input  = path.resolve(__dirname, 'public/images/logo.png')
const output = path.resolve(__dirname, 'public/images/logo-transparent.png')

async function removeBackground() {
  console.log('🖼️  Procesando logo...')

  // 1. Leer imagen y obtener raw RGBA
  const { data, info } = await sharp(input)
    .ensureAlpha()       // añadir canal alpha si no existe
    .raw()               // acceder a los píxeles en bruto
    .toBuffer({ resolveWithObject: true })

  const { width, height, channels } = info  // channels = 4 (RGBA)
  const pixels = new Uint8Array(data)

  // 2. Umbral de "color de fondo": cualquier píxel muy claro (R,G,B > 220)
  //    se hace transparente. El logo original tiene fondo gris claro ~#F2F2F2.
  const THRESHOLD = 220

  for (let i = 0; i < pixels.length; i += channels) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]

    // Si el píxel es casi blanco/gris claro → transparente
    if (r > THRESHOLD && g > THRESHOLD && b > THRESHOLD) {
      pixels[i + 3] = 0 // alpha = 0 (transparente)
    }
    // Antialiasing parcial: píxeles en zona de transición (~200-220) → semitransparentes
    else if (r > 200 && g > 200 && b > 200) {
      const intensity = Math.max(r, g, b)
      const alphaRatio = 1 - ((intensity - 200) / 20) // de 200=opaco a 220=transparente
      pixels[i + 3] = Math.round(pixels[i + 3] * alphaRatio)
    }
  }

  // 3. Reconstruir imagen PNG con alpha
  await sharp(Buffer.from(pixels), {
    raw: { width, height, channels }
  })
    .png({ compressionLevel: 9 })
    .toFile(output)

  console.log(`✅  Logo sin fondo guardado → public/images/logo-transparent.png`)
  console.log(`    (${width}×${height}px, ${channels} canales)`)
}

removeBackground().catch(err => {
  console.error('❌  Error:', err.message)
  process.exit(1)
})
