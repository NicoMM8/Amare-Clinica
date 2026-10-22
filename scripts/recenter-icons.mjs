import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const TRANSPARENTE_DIR = path.join(ROOT_DIR, 'public/images/iconos-amare/transparente');
const TERRACOTA_DIR = path.join(ROOT_DIR, 'public/images/iconos-amare/terracota');

// Amaré Brand Clay / Terracotta tone
const BRAND_CLAY = { r: 158, g: 75, b: 51 }; // #9E4B33

// Canvas size for high-density display (crisp on 2x/3x retina at 74x74 CSS size)
const CANVAS_SIZE = 200;
// Max glyph dimension inside the 200x200 canvas (~68% fill ratio gives ~12px padding on a 74px badge)
const MAX_GLYPH_SIZE = 138;

async function processIcons() {
  const files = fs.readdirSync(TRANSPARENTE_DIR).filter(f => f.endsWith('.png'));

  console.log(`Processing ${files.length} artisan icons...`);

  for (const file of files) {
    const baseName = path.basename(file, '.png');
    const srcPng = path.join(TRANSPARENTE_DIR, file);

    // 1. Trim the glyph to its true bounding box
    const trimmedBuffer = await sharp(srcPng).trim().toBuffer({ resolveWithObject: true });
    const { width: origW, height: origH } = trimmedBuffer.info;

    // 2. Compute proportional scaling to fit comfortably within MAX_GLYPH_SIZE
    const scale = Math.min(MAX_GLYPH_SIZE / origW, MAX_GLYPH_SIZE / origH);
    const scaledW = Math.max(1, Math.round(origW * scale));
    const scaledH = Math.max(1, Math.round(origH * scale));

    const resizedGlyph = await sharp(trimmedBuffer.data)
      .resize(scaledW, scaledH, { fit: 'fill' })
      .toBuffer();

    // 3. Exact centering offsets
    let leftOffset = Math.round((CANVAS_SIZE - scaledW) / 2);
    let topOffset = Math.round((CANVAS_SIZE - scaledH) / 2);

    // Minor optical weight adjustments for specific asymmetrical shapes:
    // Pertenencia has a small sun on top right, giving a slight vertical lightness
    if (baseName === 'pertenencia') {
      topOffset = Math.round((CANVAS_SIZE - scaledH) / 2) + 1;
    }
    // Ansiedad has thread line flowing right and down
    if (baseName === 'ansiedad') {
      leftOffset = Math.round((CANVAS_SIZE - scaledW) / 2);
    }

    console.log(`- ${baseName.padEnd(20)}: glyph ${origW}x${origH} -> scaled ${scaledW}x${scaledH} | offset [left:${leftOffset}, top:${topOffset}]`);

    // 4. Generate Centered TRANSPARENT version (PNG + WebP)
    const transparentCanvas = await sharp({
      create: {
        width: CANVAS_SIZE,
        height: CANVAS_SIZE,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([{ input: resizedGlyph, left: leftOffset, top: topOffset }])
      .png()
      .toBuffer();

    fs.writeFileSync(path.join(TRANSPARENTE_DIR, `${baseName}.png`), transparentCanvas);

    const transparentWebp = await sharp(transparentCanvas)
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(path.join(TRANSPARENTE_DIR, `${baseName}.webp`), transparentWebp);

    // 5. Generate Centered TERRACOTA version (PNG + WebP)
    const terracotaCanvas = await sharp({
      create: {
        width: CANVAS_SIZE,
        height: CANVAS_SIZE,
        channels: 4,
        background: { r: BRAND_CLAY.r, g: BRAND_CLAY.g, b: BRAND_CLAY.b, alpha: 1 }
      }
    })
      .composite([{ input: resizedGlyph, left: leftOffset, top: topOffset }])
      .png()
      .toBuffer();

    fs.writeFileSync(path.join(TERRACOTA_DIR, `${baseName}.png`), terracotaCanvas);

    const terracotaWebp = await sharp(terracotaCanvas)
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(path.join(TERRACOTA_DIR, `${baseName}.webp`), terracotaWebp);
  }

  console.log('✅ All icons successfully centered and regenerated in both terracota and transparente formats!');
}

processIcons().catch(err => {
  console.error('Error centering icons:', err);
  process.exit(1);
});
