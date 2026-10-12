/**
 * optimize-images.mjs — Genera versiones ligeras (WebP + JPG optimizado) de las
 * imágenes críticas para mejorar LCP / Core Web Vitals.
 *
 * Uso: node scripts/optimize-images.mjs
 * (Ejecutar de nuevo solo cuando cambien las imágenes originales.)
 */
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const IMG = path.resolve(__dirname, '../public/images')

async function variants(src, base, widths, { quality = 72 } = {}) {
  const input = path.join(IMG, src)
  const meta = await sharp(input).metadata()
  console.log(`• ${src} (${meta.width}x${meta.height})`)
  for (const w of widths) {
    const width = Math.min(w, meta.width)
    await sharp(input).resize({ width }).webp({ quality }).toFile(path.join(IMG, `${base}-${w}.webp`))
  }
  // Fallback JPG optimizado (ancho mayor)
  const maxW = Math.min(widths[widths.length - 1], meta.width)
  await sharp(input).resize({ width: maxW }).jpeg({ quality: 76, mozjpeg: true }).toFile(path.join(IMG, `${base}-${widths[widths.length - 1]}.jpg`))
  const out = await sharp(input).resize({ width: maxW }).metadata()
  console.log(`  ↳ ratio ${meta.width}/${meta.height}`, out.width)
}

async function logo() {
  const input = path.join(IMG, 'logo-transparent.png')
  const trimmed = await sharp(input).trim().toBuffer()
  const meta = await sharp(trimmed).metadata()
  console.log(`• logo-transparent.png recortado → ${meta.width}x${meta.height}`)
  // 2x para un alto visual de ~44px
  await sharp(trimmed).resize({ height: 96 }).webp({ quality: 90 }).toFile(path.join(IMG, 'logo-nav.webp'))
  await sharp(trimmed).resize({ height: 96 }).png({ compressionLevel: 9 }).toFile(path.join(IMG, 'logo-nav.png'))
  const out = await sharp(path.join(IMG, 'logo-nav.png')).metadata()
  console.log(`  ↳ logo-nav ${out.width}x${out.height}`)
}

await variants('hero-therapist.jpg', 'hero-therapist', [480, 960])
await variants('terapia-pareja-banner-canvas.jpg', 'terapia-pareja-banner', [560, 1120])
await logo()
console.log('✅ Imágenes optimizadas')
