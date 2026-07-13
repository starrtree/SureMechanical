import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url)).replace('/scripts', '');
const source = join(root, 'assets');
const destination = join(root, 'dist', 'assets');
const files = [
  'upgrade-core.css',
  'upgrade-sections.css',
  'upgrade-portfolio.css',
  'upgrade-pages.css',
  'responsive-polish.css',
  'upgrade.js',
  'shell.js',
  'page-tools.js',
  'project-modal.js',
];

await mkdir(destination, { recursive: true });
await Promise.all(files.map((file) => copyFile(join(source, file), join(destination, file))));
console.log(`Synced ${files.length} enhancement assets to dist/assets`);
