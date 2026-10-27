import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { GetStaticProps } from 'next';

import TheHogansLayout from '../../components/TheHogansLayout';
import styles from '../../components/Hub.module.css';

// WoW guides. Each one is a standalone HTML app in public/wow/<name>/index.html
// (served at /wow/<name> by the rewrites in next.config.js), so adding a guide
// is just adding a folder; this list picks it up on the next build.

interface Guide {
  href: string;
  title: string;
  blurb: string | null;
}

interface WowHubProps {
  guides: Guide[];
}

const TITLE = /<title>([^<]*)<\/title>/;
const DESCRIPTION = /<meta name="description" content="([^"]*)"/;

// Nx runs `next build` from the workspace root; the second path covers
// running from inside the app folder.
export const getStaticProps: GetStaticProps<WowHubProps> = async () => {
  const dirs = [
    join(process.cwd(), 'apps/the-hogans/public/wow'),
    join(process.cwd(), 'public/wow'),
  ];
  for (const dir of dirs) {
    try {
      // Build-time only, so nothing needs tracing into the server bundle.
      const names = readdirSync(/*turbopackIgnore: true*/ dir);
      const guides: Guide[] = [];
      for (const name of names) {
        let html: string;
        try {
          html = readFileSync(join(dir, name, 'index.html'), 'utf8');
        } catch {
          continue; // not a guide folder
        }
        guides.push({
          href: `/wow/${name}`,
          title: html.match(TITLE)?.[1] ?? name,
          blurb: html.match(DESCRIPTION)?.[1] ?? null,
        });
      }
      guides.sort((a, b) => a.title.localeCompare(b.title));
      return { props: { guides } };
    } catch {
      // try the next location
    }
  }
  return { props: { guides: [] } };
};

export default function WowHub({ guides }: WowHubProps) {
  return (
    <TheHogansLayout
      title="WoW"
      description="World of Warcraft guides on the-hogans."
      hideNavBar
    >
      <div className={styles.root}>
        <div className={styles.wrap}>
          <h1>WoW</h1>
          <ul className={styles.list}>
            {guides.map((g) => (
              <li key={g.href}>
                {/* Plain <a>: these are static HTML files, not Next pages. */}
                <a href={g.href} className={styles.card}>
                  <span className={styles.title}>{g.title}</span>
                  {g.blurb && <span className={styles.blurb}>{g.blurb}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TheHogansLayout>
  );
}
