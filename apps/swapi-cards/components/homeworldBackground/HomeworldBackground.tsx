import { useState, useEffect } from 'react';
import SwapiCardsBarren from '../background/scenes/SwapiCardsBarren';
import SwapiCardsCityscape from '../background/scenes/SwapiCardsCityscape';
import SwapiCardsDesert from '../background/scenes/SwapiCardsDesert';
import SwapiCardsForest from '../background/scenes/SwapiCardsForest';
import GasGiant from '../background/scenes/SwapiCardsGasGiant';
import Grasslands from '../background/scenes/SwapiCardsGrasslands';
import Jungles from '../background/scenes/SwapiCardsJungle';
import Lakes from './lakes/Lakes';
import Mountains from '../background/partials/SwapiCardsMountainOne';
import Ocean from '../background/scenes/SwapiCardsOcean';
import Plains from './plains/Plains';
import Rocky from './rocky/Rocky';
import RockyIslands from './rockyIslands/RockyIslands';
import SwapiCardsScrublands from '../background/scenes/SwapiCardsScrublands';
import SwapiCardsToxicCloudsea from '../background/scenes/SwapiCardsToxicCloudsea';
import SwapiCardsUnknown from '../background/scenes/SwapiCardsUnknown';

interface HomeworldBackgroundProps {
  homeworld: string;
  styles: string;
  planet: string;
}

const HomeworldBackground: React.FC<HomeworldBackgroundProps> = (props) => {
  const { homeworld, styles, planet } = props;

  const [homeworldName, setHomeworldName] = useState('');
  const [terrain, setTerrain] = useState('');

  async function fetchPlanetInfo(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    const tempTerrain = json.terrain.split(', ');
    const firstTerrain = tempTerrain[0];
    setTerrain(firstTerrain);
    return json.name;
  }

  useEffect(() => {
    fetchPlanetInfo(planet);
    setHomeworldName(homeworld);
  }, [homeworld]);

  let findHomeworld = (terrain: string) => {
    try {
      switch (terrain) {
        case 'barren':
          return (
            <SwapiCardsBarren homeworld={homeworldName} terrain={terrain} />
          );
        case 'toxic cloudsea':
          return (
            <SwapiCardsToxicCloudsea
              homeworld={homeworldName}
              terrain={terrain}
            />
          );
        case 'desert':
        case 'deserts':
          return (
            <SwapiCardsDesert homeworld={homeworldName} terrain={terrain} />
          );
        case 'grasslands':
        case 'grassy hills':
        case 'grass':
        case 'verdant':
          return <Grasslands homeworld={homeworldName} terrain={terrain} />;
        case 'jungle':
        case 'jungles':
          return <Jungles homeworld={homeworldName} terrain={terrain} />;
        case 'gas giant':
          return <GasGiant homeworld={homeworldName} terrain={terrain} />;
        case 'forest':
        case 'forests':
        case 'rain forest':
        case 'rainforests':
          return (
            <SwapiCardsForest homeworld={homeworldName} terrain={terrain} />
          );
        case 'cityscape':
        case 'cities':
        case 'city':
        case 'urban':
        case 'urban areas':
          return (
            <SwapiCardsCityscape homeworld={homeworldName} terrain={terrain} />
          );
        case 'plains':
          return <Plains homeworld={homeworldName} terrain={terrain} />;
        case 'lakes':
        case 'swamps':
          return <Lakes homeworld={homeworldName} terrain={terrain} />;
        // case 'mountains':
        //   return <Mountains homeworld={homeworldName} terrain={terrain} />;
        case 'unknown':
          return (
            <SwapiCardsUnknown homeworld={homeworldName} terrain={terrain} />
          );
        case 'ocean':
        case 'oceans':
          return <Ocean homeworld={homeworldName} terrain={terrain} />;
        case 'rocky islands':
          return <RockyIslands homeworld={homeworldName} terrain={terrain} />;
        case 'rocky':
        case 'rocky canyons':
        case 'rock':
          return <Rocky homeworld={homeworldName} terrain={terrain} />;
        case 'scrublands':
          return (
            <SwapiCardsScrublands homeworld={homeworldName} terrain={terrain} />
          );
        default:
          return (
            <div
              className={`container absolute bottom-40 -right-24 mt-4 mb-8 z-10`}
            >
              {terrain}
            </div>
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles} id={terrain}>
      <pre>{terrain}</pre>
      {findHomeworld(terrain)}
    </div>
  );
};

export default HomeworldBackground;
