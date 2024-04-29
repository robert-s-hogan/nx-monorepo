import { useState, useEffect } from 'react';
import SwapiCardsTerrain from './SwapiCardsTerrain';

export const UnknownTerrain = () => {
  return (
    <div className="h-full w-full flex items-center justify-center text-white text-2xl font-bold">
      Unknown Terrain
    </div>
  );
};

interface HomeworldBackgroundProps {
  homeworld: string;
  styles: string;
  planet: string;
}

const HomeworldBackground: React.FC<HomeworldBackgroundProps> = ({
  homeworld,
  styles,
  planet,
}) => {
  const [homeworldName, setHomeworldName] = useState('');
  const [terrain, setTerrain] = useState('');

  useEffect(() => {
    async function fetchPlanetInfo() {
      const response = await fetch(planet);
      const json = await response.json();
      setHomeworldName(json.name);
      setTerrain(json.terrain.split(', ')[0]);
    }
    fetchPlanetInfo();
  }, [planet]);

  const TerrainComponent =
    (SwapiCardsTerrain as any)[terrain.toLowerCase()] || UnknownTerrain;

  return (
    <div className={styles} id={terrain}>
      <TerrainComponent homeworld={homeworldName} terrain={terrain} />
    </div>
  );
};

export default HomeworldBackground;
