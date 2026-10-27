// Copy third party libraries from /node_modules into /vendor.
// Replaces the former gulp "vendor" task. Usage: npm install && npm run vendor
import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('..', import.meta.url)));

// Bootstrap: everything in dist except the unused grid/reboot builds
cpSync('node_modules/bootstrap/dist', 'vendor/bootstrap', {
  recursive: true,
  filter: (src) => !/bootstrap-(grid|reboot)/.test(src),
});

// jQuery: only the builds this site serves
mkdirSync('vendor/jquery', { recursive: true });
for (const file of [
  'jquery.js',
  'jquery.min.js',
  'jquery.min.map',
  'jquery.slim.js',
  'jquery.slim.min.js',
  'jquery.slim.min.map',
]) {
  cpSync(`node_modules/jquery/dist/${file}`, `vendor/jquery/${file}`);
}
