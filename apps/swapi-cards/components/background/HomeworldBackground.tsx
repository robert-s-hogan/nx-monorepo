import { useState, useEffect } from 'react';
import AirlessAsteroid from './scenes/SwapiCardsAirlessAsteroid';
import Bamboo from './scenes/SwapiCardsBamboo';
import Beach from './scenes/SwapiCardsBeach';
import Bog from './scenes/SwapiCardsBog';
import Canyon from './scenes/SwapiCardsCanyon';
import Cave from './scenes/SwapiCardsCave';
import Cityscape from './scenes/SwapiCardsCityscape';
import Cliff from './scenes/SwapiCardsCliff';
import Desert from './scenes/SwapiCardsDesert';
import DesertCactus from './scenes/SwapiCardsDesertCactus';
import Farmland from './scenes/SwapiCardsFarmland';
import Fiord from './scenes/SwapiCardsFiord';
import Forest from './scenes/SwapiCardsForest';
import ForestNight from './scenes/SwapiCardsForestNight';
import ForestPines from './scenes/SwapiCardsForestPines';
import GasGiant from './scenes/SwapiCardsGasGiant';
import Glacier from './scenes/SwapiCardsGlacier';
import GlacierWithSun from './scenes/SwapiCardsGlacierWithSun';
import Hill from './scenes/SwapiCardsHill';
import Iceberg from './scenes/SwapiCardsIceberg';
import Island from './scenes/SwapiCardsIsland';
import Lake from './scenes/SwapiCardsLake';
import Machair from './scenes/SwapiCardsMachair';
import Marsh from './scenes/SwapiCardsMarsh';
import Megalith from './scenes/SwapiCardsMegalith';
import MountainHills from './scenes/SwapiCardsMountainHills';
import Mountains from './scenes/SwapiCardsMountains';
import MountainsLake from './scenes/SwapiCardsMountainsLake';
import Ocean from './scenes/SwapiCardsOcean';
import Plains from './scenes/SwapiCardsPlains';
import Prairie from './scenes/SwapiCardsPrairie';
import Rainforest from './scenes/SwapiCardsRainforest';
import RainforestTwo from './scenes/SwapiCardsRainforestTwo';
import RockyIsland from './scenes/SwapiCardsRockyIsland';
import Ruins from './scenes/SwapiCardsRuins';
import Sandstone from './scenes/SwapiCardsSandstone';
import Savannah from './scenes/SwapiCardsSavannah';
import SeaBottomAquarium from './scenes/SwapiCardsSeaBottomAquarium';
import SeaCave from './scenes/SwapiCardsSeaCave';
import Shrubland from './scenes/SwapiCardsShrubland';
import Sunset from './scenes/SwapiCardsSunset';
import Taiga from './scenes/SwapiCardsTaiga';
import Tundra from './scenes/SwapiCardsTundra';
import Unknown from './scenes/SwapiCardsUnknown';
import Village from './scenes/SwapiCardsVillage';
import Volcano from './scenes/SwapiCardsVolcano';
import Waterfalls from './scenes/SwapiCardsWaterfalls';
import Woodland from './scenes/SwapiCardsWoodland';

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
    async function updateInfo() {
      const fetchedHomeworldName = await fetchPlanetInfo(planet); // Assuming this should return the name
      setHomeworldName(fetchedHomeworldName); // Use the fetched name instead
    }

    updateInfo();
  }, [homeworld, planet]); // Include planet in the dependency array

  let findHomeworld = (terrain: string) => {
    try {
      switch (terrain) {
        case 'airless asteroid':
          return (
            <AirlessAsteroid homeworld={homeworldName} terrain={terrain} />
          );
        case 'barren':
        case 'desert':
        case 'deserts':
        case 'rock':
          return <Desert homeworld={homeworldName} terrain={terrain} />;
        case 'grasslands':
        case 'grass':
        case 'verdant':
          return <Prairie homeworld={homeworldName} terrain={terrain} />;
        case 'grassy hills':
          return <Hill homeworld={homeworldName} terrain={terrain} />;
        case 'jungle':
        case 'jungles':
          return <Bog homeworld={homeworldName} terrain={terrain} />;
        case 'gas giant':
          return <GasGiant homeworld={homeworldName} terrain={terrain} />;
        case 'glacier':
        case 'glaciers':
          return <Glacier homeworld={homeworldName} terrain={terrain} />;
        case 'forest':
        case 'forests':
        case 'fungus forests':
          return <Forest homeworld={homeworldName} terrain={terrain} />;
        case 'rain forest':
        case 'rainforests':
          return <Rainforest homeworld={homeworldName} terrain={terrain} />;
        case 'caves':
          return <Cave homeworld={homeworldName} terrain={terrain} />;
        case 'cityscape':
        case 'cities':
          return <Cityscape homeworld={homeworldName} terrain={terrain} />;
        case 'city':
        case 'urban':
        case 'urban areas':
          return <Village homeworld={homeworldName} terrain={terrain} />;

        case 'plains':
          return <Plains homeworld={homeworldName} terrain={terrain} />;
        case 'lakes':
        case 'lake':
          return <Lake homeworld={homeworldName} terrain={terrain} />;
        case 'swamps':
          return <Bog homeworld={homeworldName} terrain={terrain} />;
        case 'mountains':
          return <Mountains homeworld={homeworldName} terrain={terrain} />;
        case 'unknown':
          return <Unknown homeworld={homeworldName} terrain={terrain} />;
        case 'ocean':
        case 'oceans':
          return <Ocean homeworld={homeworldName} terrain={terrain} />;
        case 'rocky islands':
          return <RockyIsland homeworld={homeworldName} terrain={terrain} />;
        case 'rocky':
        case 'rocky canyons':
          return <Canyon homeworld={homeworldName} terrain={terrain} />;
        case 'scrublands':
          return <Shrubland homeworld={homeworldName} terrain={terrain} />;
        case 'tundra':
          return <Tundra homeworld={homeworldName} terrain={terrain} />;
        case 'volcanoes':
          return <Volcano homeworld={homeworldName} terrain={terrain} />;
        case 'toxic cloudsea':
          return (
            <SeaBottomAquarium homeworld={homeworldName} terrain={terrain} />
          );
        default:
          return (
            <div
              className={`container absolute bottom-40 -right-24 mt-4 mb-8 z-10`}
            >
              {homeworldName} {terrain}
            </div>
          );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles} id={terrain}>
      {findHomeworld(terrain)}
    </div>
  );
};

export default HomeworldBackground;
