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

  const [terrain, setTerrain] = useState('');

  async function fetchPlanetInfo(url: string) {
    const response = await fetch(url);
    const json = await response.json();
    const tempTerrain = json.terrain.split(', ');
    const firstTerrain = tempTerrain[0];
    setTerrain(firstTerrain);

    return json.name;
  }

  let findHomeworld = (terrain: string) => {
    try {
      switch (terrain) {
        case 'airless asteroid':
          return <AirlessAsteroid />;
        case 'barren':
        case 'desert':
        case 'deserts':
        case 'rock':
          return <Desert />;
        case 'grasslands':
        case 'grass':
        case 'verdant':
          return <Prairie />;
        case 'grassy hills':
          return <Hill />;
        case 'jungle':
        case 'jungles':
          return <Bog />;
        case 'gas giant':
          return <GasGiant />;
        case 'glacier':
        case 'glaciers':
          return <Glacier />;
        case 'forest':
        case 'forests':
        case 'fungus forests':
          return <Forest />;
        case 'rain forest':
        case 'rainforests':
          return <Rainforest />;
        case 'caves':
          return <Cave />;
        case 'cityscape':
        case 'cities':
          return <Cityscape />;
        case 'city':
        case 'urban':
        case 'urban areas':
          return <Village />;

        case 'plains':
          return <Plains />;
        case 'lakes':
        case 'lake':
          return <Lake />;
        case 'swamps':
          return <Bog />;
        case 'mountains':
          return <Mountains />;
        case 'unknown':
          return <Unknown />;
        case 'ocean':
        case 'oceans':
          return <Ocean />;
        case 'rocky islands':
          return <RockyIsland />;
        case 'rocky':
        case 'rocky canyons':
          return <Canyon />;
        case 'scrublands':
          return <Shrubland />;
        case 'tundra':
          return <Tundra />;
        case 'volcanoes':
          return <Volcano />;
        case 'toxic cloudsea':
          return <SeaBottomAquarium />;
        default:
          return null;
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
