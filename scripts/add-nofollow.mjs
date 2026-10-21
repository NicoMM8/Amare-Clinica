import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, '../src');

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
    } else if (full.endsWith('.jsx') || full.endsWith('.js')) {
      let content = fs.readFileSync(full, 'utf8');
      if (
        content.includes('wa.me') ||
        content.includes('whatsappUrl') ||
        content.includes('whatsappPareja') ||
        content.includes('whatsappIndividual') ||
        content.includes('whatsappMatchUrl')
      ) {
        const updated = content
          .replace(/rel="noopener noreferrer"/g, 'rel="nofollow noopener noreferrer"')
          .replace(/rel="noopener noreferrer "/g, 'rel="nofollow noopener noreferrer" ');
        if (updated !== content) {
          fs.writeFileSync(full, updated, 'utf8');
          console.log('✅ Added nofollow to:', path.relative(srcDir, full));
        }
      }
    }
  }
}

walk(srcDir);
