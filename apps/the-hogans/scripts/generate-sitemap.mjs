// Writes public/sitemap.xml from the files in pages/, so a new page shows up
// in the sitemap without editing anything. Runs before every build via the
// `sitemap` target in project.json.
//
// Left out: _app/_document, api routes, dynamic routes ([id]), error pages,
// and any page that opts in to the login gate with `Page.isPrivate = true`.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.the-hogans.com';
const APP = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = join(APP, 'pages');
const OUT = join(APP, 'public', 'sitemap.xml');

const PAGE_FILE = /\.(tsx|ts|jsx|js|mdx)$/;
const ERROR_PAGES = new Set(['/404', '/500', '/_error']);

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (PAGE_FILE.test(entry.name)) yield path;
  }
}

function toRoute(file) {
  const parts = relative(PAGES, file).replace(PAGE_FILE, '').split(sep);
  if (parts[0] === 'api') return null;
  if (parts.some((p) => p.startsWith('_') || p.includes('['))) return null;
  if (parts[parts.length - 1] === 'index') parts.pop();
  const route = '/' + parts.join('/');
  if (ERROR_PAGES.has(route)) return null;
  if (/\.isPrivate\s*=\s*true/.test(readFileSync(file, 'utf8'))) return null;
  return route;
}

const routes = [...walk(PAGES)]
  .map(toRoute)
  .filter(Boolean)
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>\n    <loc>${SITE}${r}</loc>\n  </url>`).join('\n')}
</urlset>
`;

writeFileSync(OUT, xml);
console.log(`sitemap.xml: ${routes.length} pages (${routes.join(', ')})`);
