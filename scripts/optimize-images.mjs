import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

async function optimizeImages() {
  console.log('🖼️  Optimizando imágenes para Lighthouse Performance...');

  // 1. pareja-terapia-online.webp (Lighthouse flagged: 441 KiB -> target < 60 KiB)
  const parejaPath = path.join(imagesDir, 'pareja-terapia-online.webp');
  if (fs.existsSync(parejaPath)) {
    const parejaBuffer = fs.readFileSync(parejaPath);
    const optimized = await sharp(parejaBuffer)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 })
      .toBuffer();
    fs.writeFileSync(parejaPath, optimized);
    console.log(`✅ pareja-terapia-online.webp optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
  }

  // 2. iris-alarcon.jpg (Lighthouse flagged: 210 KiB -> target WebP < 25 KiB)
  const irisJpgPath = path.join(imagesDir, 'iris-alarcon.jpg');
  const irisWebpPath = path.join(imagesDir, 'iris-alarcon.webp');
  if (fs.existsSync(irisJpgPath)) {
    const irisBuffer = fs.readFileSync(irisJpgPath);
    // WebP version
    const optimizedWebp = await sharp(irisBuffer)
      .resize({ width: 360, height: 360, fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(irisWebpPath, optimizedWebp);
    console.log(`✅ iris-alarcon.webp generado: ${(optimizedWebp.length / 1024).toFixed(1)} KiB`);

    // JPG fallback
    const optimizedJpg = await sharp(irisBuffer)
      .resize({ width: 360, height: 360, fit: 'cover' })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    fs.writeFileSync(irisJpgPath, optimizedJpg);
    console.log(`✅ iris-alarcon.jpg optimizado: ${(optimizedJpg.length / 1024).toFixed(1)} KiB`);
  }

  // 3. equipo-clinico-amare-960.webp (Lighthouse flagged: 102 KiB -> target < 60 KiB)
  const equipoPath = path.join(imagesDir, 'equipo-clinico-amare-960.webp');
  if (fs.existsSync(equipoPath)) {
    const equipoBuffer = fs.readFileSync(equipoPath);
    const optimized = await sharp(equipoBuffer)
      .resize({ width: 840, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(equipoPath, optimized);
    console.log(`✅ equipo-clinico-amare-960.webp optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
  }

  // 4. logo-nav.webp (Lighthouse flagged: 13.4 KiB -> target < 8 KiB)
  const logoNavPath = path.join(imagesDir, 'logo-nav.webp');
  if (fs.existsSync(logoNavPath)) {
    const logoBuffer = fs.readFileSync(logoNavPath);
    const optimized = await sharp(logoBuffer)
      .resize({ width: 228, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoNavPath, optimized);
    console.log(`✅ logo-nav.webp optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
  }

  console.log('🎉 Optimización de imágenes completada con éxito.');
}

optimizeImages().catch(err => {
  console.error('Error optimizando imágenes:', err);
});
