import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.resolve(__dirname, '../public/images');

async function optimizeImages() {
  console.log('🖼️  Optimizando imágenes para Lighthouse Performance...');

  // 1. pareja-terapia-online.webp (Lighthouse flagged: 130 KiB -> target ~45-55 KiB)
  const parejaJpgPath = path.join(imagesDir, 'pareja-terapia-online.jpg');
  const parejaPath = path.join(imagesDir, 'pareja-terapia-online.webp');
  const sourcePareja = fs.existsSync(parejaJpgPath) ? parejaJpgPath : parejaPath;
  if (fs.existsSync(sourcePareja)) {
    const parejaBuffer = fs.readFileSync(sourcePareja);
    const optimized = await sharp(parejaBuffer)
      .resize({ width: 560, withoutEnlargement: true })
      .webp({ quality: 60, effort: 6 })
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

  // 4. hero-amare-collage-800.webp & 1200.webp (Lighthouse flagged: 70.9 KiB -> target ~40 KiB)
  const collage800Path = path.join(imagesDir, 'hero-amare-collage-800.webp');
  if (fs.existsSync(collage800Path)) {
    const buf = fs.readFileSync(collage800Path);
    const optimized = await sharp(buf)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 68, effort: 6 })
      .toBuffer();
    fs.writeFileSync(collage800Path, optimized);
    console.log(`✅ hero-amare-collage-800.webp optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
  }

  const collage1200Path = path.join(imagesDir, 'hero-amare-collage-1200.webp');
  if (fs.existsSync(collage1200Path)) {
    const buf = fs.readFileSync(collage1200Path);
    const optimized = await sharp(buf)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toBuffer();
    fs.writeFileSync(collage1200Path, optimized);
    console.log(`✅ hero-amare-collage-1200.webp optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
  }

  // 5. logo-nav.webp (Lighthouse flagged: 11.8 KiB -> target ~3-4 KiB)
  const logoNavPath = path.join(imagesDir, 'logo-nav.webp');
  if (fs.existsSync(logoNavPath)) {
    const logoBuffer = fs.readFileSync(logoNavPath);
    const optimized = await sharp(logoBuffer)
      .resize({ width: 228, height: 96, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 65, effort: 6 })
      .toBuffer();
    fs.writeFileSync(logoNavPath, optimized);
    console.log(`✅ logo-nav.webp optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
  }

  // 6. Iconos artesanos terracota (Lighthouse flagged 200x200 down to 100x100 ~2-3 KiB)
  const iconosDir = path.join(imagesDir, 'iconos-amare/terracota');
  if (fs.existsSync(iconosDir)) {
    const files = fs.readdirSync(iconosDir).filter(f => f.endsWith('.webp'));
    for (const file of files) {
      const iconPath = path.join(iconosDir, file);
      const iconBuf = fs.readFileSync(iconPath);
      const optimized = await sharp(iconBuf)
        .resize({ width: 120, height: 120, fit: 'contain' })
        .webp({ quality: 75, effort: 6 })
        .toBuffer();
      fs.writeFileSync(iconPath, optimized);
      console.log(`✅ icono ${file} optimizado: ${(optimized.length / 1024).toFixed(1)} KiB`);
    }
  }

  console.log('🎉 Optimización de imágenes completada con éxito.');
}

optimizeImages().catch(err => {
  console.error('Error optimizando imágenes:', err);
});
