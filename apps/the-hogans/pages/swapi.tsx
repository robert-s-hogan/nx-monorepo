import Head from 'next/head';

import TheHogansLayout from '../components/TheHogansLayout';
import { Card, LoadingCard } from '../components/swapi/Card';
import { Hero } from '../components/swapi/Hero';
import { Character } from '../components/swapi/types';
import { API, useSwapi } from '../components/swapi/useSwapi';
import styles from '../components/swapi/Swapi.module.css';

// Star Wars character cards from SWAPI, moved here from the old standalone
// swapi-cards app. Each card draws its character's homeworld terrain. All
// styling is in Swapi.module.css, scoped to this page.
export default function Swapi() {
  const { data: characters, error } = useSwapi<Character[]>(`${API}/people`);

  return (
    <TheHogansLayout
      title="Star Wars Cards"
      description="Star Wars characters drawn on their home planets, from SWAPI."
      hideNavBar
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poller+One&family=Roboto+Flex:opsz,wght@8..144,300;8..144,600;8..144,1000&display=swap"
        />
      </Head>
      <div className={styles.root}>
        <Hero />
        {error ? (
          <p className={styles.error}>
            Oops! Something went wrong. Try again in a bit.
          </p>
        ) : (
          <div className={styles.grid}>
            {characters
              ? characters.map((c) => <Card key={c.url} character={c} />)
              : Array.from({ length: 15 }, (_, i) => <LoadingCard key={i} />)}
          </div>
        )}
      </div>
    </TheHogansLayout>
  );
}
