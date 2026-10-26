import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

import styles from './Swapi.module.css';

// Each scene is its own chunk, downloaded only when a card with that terrain
// is on screen, so the ~3,500 lines of SVG don't load up front.
const scene = (load: () => Promise<{ default: ComponentType }>) =>
  dynamic(load, { ssr: false });

const AirlessAsteroid = scene(() => import('./scenes/AirlessAsteroid'));
const Bog = scene(() => import('./scenes/Bog'));
const Canyon = scene(() => import('./scenes/Canyon'));
const Cave = scene(() => import('./scenes/Cave'));
const Cityscape = scene(() => import('./scenes/Cityscape'));
const Desert = scene(() => import('./scenes/Desert'));
const Forest = scene(() => import('./scenes/Forest'));
const GasGiant = scene(() => import('./scenes/GasGiant'));
const Glacier = scene(() => import('./scenes/Glacier'));
const Hill = scene(() => import('./scenes/Hill'));
const Lake = scene(() => import('./scenes/Lake'));
const Mountains = scene(() => import('./scenes/Mountains'));
const Ocean = scene(() => import('./scenes/Ocean'));
const Plains = scene(() => import('./scenes/Plains'));
const Prairie = scene(() => import('./scenes/Prairie'));
const Rainforest = scene(() => import('./scenes/Rainforest'));
const RockyIsland = scene(() => import('./scenes/RockyIsland'));
const SeaBottomAquarium = scene(() => import('./scenes/SeaBottomAquarium'));
const Shrubland = scene(() => import('./scenes/Shrubland'));
const Tundra = scene(() => import('./scenes/Tundra'));
const Unknown = scene(() => import('./scenes/Unknown'));
const Village = scene(() => import('./scenes/Village'));
const Volcano = scene(() => import('./scenes/Volcano'));

/** The API's first-listed terrain word → the scene drawn behind the card. */
const SCENES: Record<string, ComponentType> = {
  'airless asteroid': AirlessAsteroid,
  barren: Desert,
  desert: Desert,
  deserts: Desert,
  rock: Desert,
  grasslands: Prairie,
  grass: Prairie,
  verdant: Prairie,
  'grassy hills': Hill,
  jungle: Bog,
  jungles: Bog,
  swamps: Bog,
  'gas giant': GasGiant,
  glacier: Glacier,
  glaciers: Glacier,
  forest: Forest,
  forests: Forest,
  'fungus forests': Forest,
  'rain forest': Rainforest,
  rainforests: Rainforest,
  caves: Cave,
  cityscape: Cityscape,
  cities: Cityscape,
  city: Village,
  urban: Village,
  'urban areas': Village,
  plains: Plains,
  lake: Lake,
  lakes: Lake,
  mountains: Mountains,
  unknown: Unknown,
  ocean: Ocean,
  oceans: Ocean,
  rocky: Canyon,
  'rocky canyons': Canyon,
  'rocky islands': RockyIsland,
  scrublands: Shrubland,
  tundra: Tundra,
  volcanoes: Volcano,
  'toxic cloudsea': SeaBottomAquarium,
};

export function Terrain({ terrain }: { terrain: string | null }) {
  if (terrain === null) return null; // planet still loading
  const Scene = SCENES[terrain.toLowerCase()];
  if (!Scene)
    return <div className={styles.unknownTerrain}>Unknown Terrain</div>;
  return <Scene />;
}
