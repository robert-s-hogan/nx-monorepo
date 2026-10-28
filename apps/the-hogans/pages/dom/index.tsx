import Link from 'next/link';

import TheHogansLayout from '../../components/TheHogansLayout';
import styles from '../../components/Hub.module.css';

// Dom's folder. Everything under /dom shares one login (lib/access.ts), so
// adding a page here is: put it in pages/dom/ and list it below.
const PAGES = [
  {
    href: '/dom/radtech',
    title: 'RadTech prereqs',
    blurb:
      'SRJC Radiologic Technology requirements, semester plan and weekly schedule.',
  },
  {
    href: '/dom/car-care',
    title: 'Car care',
    blurb: 'Beginner maintenance: oil, tires, fluids, and when to call a pro.',
  },
];

export default function DomHub() {
  return (
    <TheHogansLayout
      title="Dom"
      description="Dom's pages on the-hogans."
      hideNavBar
    >
      <div className={styles.root}>
        <div className={styles.wrap}>
          <h1>Dom</h1>
          <ul className={styles.list}>
            {PAGES.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className={styles.card}>
                  <span className={styles.title}>{p.title}</span>
                  <span className={styles.blurb}>{p.blurb}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </TheHogansLayout>
  );
}
