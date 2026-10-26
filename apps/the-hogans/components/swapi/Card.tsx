import { memo } from 'react';

import { Face } from './Face';
import { Terrain } from './Terrain';
import { Character, Planet } from './types';
import { useSwapi } from './useSwapi';
import styles from './Swapi.module.css';

// One character: their homeworld's terrain as the backdrop, their face in
// the corner. Cards that share a homeworld share one request.
export const Card = memo(function Card({
  character,
}: {
  character: Character;
}) {
  const { data: planet, error } = useSwapi<Planet>(character.homeworld || null);
  const terrain = planet
    ? planet.terrain.split(', ')[0]
    : error
      ? 'unknown'
      : null;

  return (
    <div
      className={styles.card}
      role="img"
      aria-label={`${character.name}${planet ? ` of ${planet.name}` : ''}`}
    >
      <div className={styles.background}>
        <Terrain terrain={terrain} />
      </div>
      <Face skin={character.skin_color} eyes={character.eye_color} />
    </div>
  );
});

export function LoadingCard() {
  return (
    <div className={styles.card}>
      <div className={styles.loading}>
        <div className={styles.spinner} />
        <h2>Loading...</h2>
      </div>
    </div>
  );
}
