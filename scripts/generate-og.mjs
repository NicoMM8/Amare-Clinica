import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const outputPath = path.resolve(rootDir, 'public/og-preview-amare.jpg');

// SVG Card Design (1200 x 630 px) with Amaré's bone/plum/clay aesthetic
const svgCard = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F2EA"/>
      <stop offset="50%" stop-color="#F0ECE1"/>
      <stop offset="100%" stop-color="#EBE6D8"/>
    </linearGradient>
    <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A95A41"/>
      <stop offset="100%" stop-color="#C26A4F"/>
    </linearGradient>
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="12" stdDeviation="20" flood-color="#22284A" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)"/>

  <!-- Decorative subtle background curves -->
  <circle cx="1100" cy="120" r="320" fill="#A95A41" fill-opacity="0.035"/>
  <circle cx="100" cy="550" r="280" fill="#22284A" fill-opacity="0.03"/>
  <rect x="36" y="36" width="1128" height="558" rx="28" fill="none" stroke="#22284A" stroke-opacity="0.08" stroke-width="1.5"/>

  <!-- Top Bar: Brand & Geo Badge -->
  <g transform="translate(80, 80)">
    <!-- Brand Tag -->
    <rect x="0" y="0" width="180" height="42" rx="21" fill="#22284A"/>
    <text x="90" y="26" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">CENTRO AMARÉ</text>

    <!-- Geographic / Audience Badge -->
    <rect x="196" y="0" width="380" height="42" rx="21" fill="#FFFFFF" stroke="#A95A41" stroke-opacity="0.3" stroke-width="1"/>
    <text x="386" y="26" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="600" fill="#A95A41" text-anchor="middle">🇸🇻 El Salvador · EE. UU. · Canadá · Online</text>
  </g>

  <!-- Main Headline (Editorial & Warm) -->
  <g transform="translate(80, 230)">
    <text x="0" y="0" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="700" fill="#22284A" letter-spacing="-1.5">
      Lo que sientes importa.
    </text>
    <text x="0" y="68" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="600" fill="#A95A41">
      Terapia de Pareja y Psicología Salvadoreña Online
    </text>
    <text x="0" y="116" font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="400" fill="#4A4A58">
      Hablamos tu idioma y también tu contexto. Primera conversación de 30 min sin costo.
    </text>
  </g>

  <!-- Bottom Proof Bar (3 Pillars + JVPP) -->
  <g transform="translate(80, 470)">
    <!-- Card Container -->
    <rect x="0" y="0" width="1040" height="84" rx="20" fill="#FFFFFF" filter="url(#cardShadow)"/>
    <rect x="0" y="0" width="1040" height="84" rx="20" fill="none" stroke="#22284A" stroke-opacity="0.06" stroke-width="1"/>

    <!-- Pillar 1 -->
    <circle cx="40" cy="42" r="14" fill="#A95A41" fill-opacity="0.12"/>
    <text x="40" y="47" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#A95A41" text-anchor="middle">✓</text>
    <text x="66" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#22284A">Lic. Iris Alarcón</text>
    <text x="66" y="56" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="#6B6B78">Acreditada JVPP El Salvador</text>

    <!-- Divider 1 -->
    <line x1="280" y1="20" x2="280" y2="64" stroke="#E5E0D4" stroke-width="1.5"/>

    <!-- Pillar 2 -->
    <circle cx="320" cy="42" r="14" fill="#25D366" fill-opacity="0.15"/>
    <text x="320" y="47" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#128C7E" text-anchor="middle">★</text>
    <text x="346" y="38" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#22284A">1ª Sesión de 30 min sin costo</text>
    <text x="346" y="56" font-family="system-ui, sans-serif" font-size="12" font-weight="500" fill="#6B6B78">Plan mensual: $25 USD / sesión</text>

    <!-- Divider 2 -->
    <line x1="620" y1="20" x2="620" y2="64" stroke="#E5E0D4" stroke-width="1.5"/>

    <!-- Pillar 3: Domain / Web -->
    <text x="660" y="38" font-family="system-ui, sans-serif" font-size="13" font-weight="600" fill="#A95A41">WEB OFICIAL</text>
    <text x="660" y="58" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#22284A">terapiadeparejaelsalvador.com</text>

    <!-- Button CTA Pill -->
    <rect x="890" y="20" width="130" height="44" rx="22" fill="#A95A41"/>
    <text x="955" y="47" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#FFFFFF" text-anchor="middle">Agendar →</text>
  </g>
</svg>
`;

async function generate() {
  const svgBuffer = Buffer.from(svgCard);
  
  await sharp(svgBuffer)
    .jpeg({
      quality: 88,
      mozjpeg: true,
      chromaSubsampling: '4:2:0'
    })
    .toFile(outputPath);

  const stats = fs.statSync(outputPath);
  console.log(`✅ Generated ${outputPath} (${(stats.size / 1024).toFixed(1)} kB)`);
}

generate().catch(console.error);
