import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Skeleton } from '@with-nx/react-ui';

import Barren from './barren/Barren';
import Cityscape from './cityscape/Cityscape';
import Desert from './desert/Desert';
import Forests from './forests/Forests';
import GasGiant from './gasGiant/GasGiant';
import Grasslands from './grasslands/Grasslands';
import Jungles from './jungle/Jungle';
import Lakes from './lakes/Lakes';
import Mountains from './mountain/Mountains';
import Ocean from './ocean/Ocean';
import Plains from './plains/Plains';
import Rocky from './rocky/Rocky';
import RockyIslands from './rockyIslands/RockyIslands';
import Scrublands from './scrublands/Scrublands';
import ToxicCloudsea from './toxicCloudsea/ToxicCloudsea';
import Unknown from './unknown/Unknown';

interface HomeWorldBackgroundProps {
  planet?: string;
  className?: string;
  planet_name?: string;
}

const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  const tempTerrain = json.terrain.split(', ');
  const firstTerrain = tempTerrain[0];
  console.log(`First Terrain: ${firstTerrain}`); // log the firstTerrain
  console.log(`Homeworld Name: ${json.name}`); // log the homeworld name
  return { homeworldName: json.name, terrain: firstTerrain };
};

const HomeworldBackground = ({
  planet,
  className,
  planet_name,
}: HomeWorldBackgroundProps) => {
  const { data, error } = useSWR(planet, fetcher);
  const homeworldName = data?.homeworldName || '';
  const terrain = data?.terrain || planet_name;

  if (error) {
    console.error(error);
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return (
      <div className={className}>
        <Skeleton height="150px" />
      </div>
    );
  }

  console.log(`planet: ${planet}`);

  let findHomeworld = (terrain: string) => {
    console.log(`Terrain received: ${terrain}`);
    console.log(`homeworld: ${homeworldName}`);
    try {
      switch (terrain) {
        case 'barren':
          return <Barren homeworld={homeworldName} terrain={terrain} />;
        case 'toxic cloudsea':
          return <ToxicCloudsea homeworld={homeworldName} terrain={terrain} />;
        case 'desert':
        case 'deserts':
          return <Desert homeworld={homeworldName} terrain={terrain} />;
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
          return <Forests homeworld={homeworldName} terrain={terrain} />;
        case 'cityscape':
        case 'cities':
        case 'city':
        case 'urban':
        case 'urban areas':
          return <Cityscape homeworld={homeworldName} terrain={terrain} />;
        case 'plains':
          return <Plains homeworld={homeworldName} terrain={terrain} />;
        case 'lakes':
        case 'swamps':
          return <Lakes homeworld={homeworldName} terrain={terrain} />;
        case 'mountains':
          return <Mountains homeworld={homeworldName} terrain={terrain} />;
        case 'unknown':
        case null:
          return <Unknown homeworld={homeworldName} terrain={terrain} />;
        case 'ocean':
        case 'oceans':
          return <Ocean homeworld={homeworldName} terrain={terrain} />;
        case 'rocky islands':
          return <RockyIslands homeworld={homeworldName} terrain={terrain} />;
        case 'rocky':
        case 'rocky canyons':
        case 'rock':
        case 'tundra':
          return <Rocky homeworld={homeworldName} terrain={terrain} />;
        case 'scrublands':
          return <Scrublands homeworld={homeworldName} terrain={terrain} />;
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
    <div className={className} id={terrain}>
      <pre className="absolute top-0 text-xs">
        {JSON.stringify(data, null, 2)}
      </pre>
      {findHomeworld(terrain)}
    </div>
  );
};

export default HomeworldBackground;
