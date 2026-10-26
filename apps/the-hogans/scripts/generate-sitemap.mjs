// Writes public/sitemap.xml from the files in pages/ plus the standalone HTML
// apps in public/<name>/index.html (served at /<name> by rewrites in
// next.config.js), so a new page shows up without editing anything. Runs before every build via the
// `sitemap` target in project.json.
//
// Left out: _app/_document, api routes, dynamic routes ([id]), error pages,
// folders behind the login (lib/private-folders.json), and unlisted pages
// that set `<meta name="robots" content="noindex" />`.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://www.the-hogans.com';
const APP = join(dirname(fileURLToPath(import.meta.url)), '..');
const PAGES = join(APP, 'pages');
const OUT = join(APP, 'public', 'sitemap.xml');

const PAGE_FILE = /\.(tsx|ts|jsx|js|mdx)$/;
const PRIVATE = Object.keys(
  JSON.parse(readFileSync(join(APP, 'lib', 'private-folders.json'), 'utf8')),
);
const ERROR_PAGES = new Set(['/404', '/500', '/_error']);

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (PAGE_FILE.test(entry.name)) yield path;
  }
}

const NOINDEX = /name="robots"\s+content="[^"]*noindex/;

function toRoute(file) {
  const parts = relative(PAGES, file).replace(PAGE_FILE, '').split(sep);
  if (parts[0] === 'api') return null;
  if (parts.some((p) => p.startsWith('_') || p.includes('['))) return null;
  if (parts[parts.length - 1] === 'index') parts.pop();
  const route = '/' + parts.join('/');
  if (ERROR_PAGES.has(route)) return null;
  if (PRIVATE.some((f) => route === f || route.startsWith(`${f}/`)))
    return null;
  const source = readFileSync(file, 'utf8');
  if (NOINDEX.test(source)) return null;
  return route;
}

function* standaloneApps() {
  const PUBLIC = join(APP, 'public');
  for (const entry of readdirSync(PUBLIC, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    try {
      const html = readFileSync(join(PUBLIC, entry.name, 'index.html'), 'utf8');
      if (!NOINDEX.test(html)) yield `/${entry.name}`;
    } catch {
      // no index.html: just an asset folder (e.g. public/car-care photos)
    }
  }
}

const routes = [...[...walk(PAGES)].map(toRoute), ...standaloneApps()]
  .filter(Boolean)
  .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>\n    <loc>${SITE}${r}</loc>\n  </url>`).join('\n')}
</urlset>
`;

writeFileSync(OUT, xml);
console.log(`sitemap.xml: ${routes.length} pages (${routes.join(', ')})`);
