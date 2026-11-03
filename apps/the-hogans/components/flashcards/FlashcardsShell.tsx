import { createContext, ReactNode, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import TheHogansLayout from '../TheHogansLayout';
import { useFlashcardsSession } from './api';
import styles from './Flashcards.module.css';

interface FlashcardsShellProps {
  title: string;
  /** Breadcrumb back to a parent page, e.g. the deck list. */
  back?: { href: string; label: string };
  /** Wider layout for the browser and editors. */
  wide?: boolean;
  /** Hide the section nav (the reviewer keeps the screen to the card). */
  bare?: boolean;
  children: ReactNode;
}

const NAV = [
  { href: '/flashcards', label: 'Decks' },
  { href: '/flashcards/add', label: 'Add' },
  { href: '/flashcards/browse', label: 'Browse' },
  { href: '/flashcards/import', label: 'Import' },
  { href: '/flashcards/note-types', label: 'Note types' },
  { href: '/flashcards/settings', label: 'Settings' },
];

const MediaTokenContext = createContext('');

/** Signature for media URLs; see components/flashcards/api.ts mediaUrl. */
export const useMediaToken = () => useContext(MediaTokenContext);

/**
 * Page frame for /flashcards. Children only render once the person's
 * collection is set up (stock note types on first visit), so pages can
 * fetch straight away.
 */
export function FlashcardsShell({ title, back, wide, bare, children }: FlashcardsShellProps) {
  const { session, error } = useFlashcardsSession();
  const { pathname } = useRouter();

  return (
    <TheHogansLayout title={title} description="Spaced-repetition flashcards." hideNavBar>
      <Head>
        <meta name="robots" content="noindex" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500..800&family=Source+Serif+4:opsz,wght@8..60,400..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.root}>
        <div className={`${styles.wrap} ${wide ? styles.wrapWide : ''}`}>
          {!bare && (
            <nav className={styles.sectionNav} aria-label="Flashcards">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  aria-current={pathname === n.href ? 'page' : undefined}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          )}
          {back && (
            <nav className={styles.crumbs}>
              <Link href={back.href}>← {back.label}</Link>
            </nav>
          )}
          {error ? (
            <p className={styles.errorText}>Couldn&apos;t load your flashcards: {error}</p>
          ) : !session ? (
            <p className={styles.loading}>Loading…</p>
          ) : (
            <MediaTokenContext.Provider value={session.mediaToken}>{children}</MediaTokenContext.Provider>
          )}
        </div>
      </div>
    </TheHogansLayout>
  );
}

/** Inline error/busy line used across the pages. */
export function Status({ error, busy }: { error?: string | null; busy?: string | null }) {
  if (error) return <p className={styles.errorText} role="alert">{error}</p>;
  if (busy) return <p className={styles.loading} role="status">{busy}</p>;
  return null;
}
