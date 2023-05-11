// components/SwapiCard.tsx
import React, { useState } from 'react';
import { Card } from '@with-nx/react-ui';
import useSWR from 'swr';

import HomeworldBackground from './homeworldBackground/HomeworldBackground';
import CardFace from './CardFace';
import CardTitle from './CardTitle';
import CardBack from './CardBack';

const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

interface SwapiCardProps {
  key?: string | number;
  data: any;
  isLoading?: boolean;
  planetName?: string;
  endpoint: string;
}

const SwapiCard = ({
  key,
  data,
  isLoading,
  planetName,
  endpoint,
}: SwapiCardProps) => {
  const { homeworld } = data;
  const { data: homeworldData } = useSWR(homeworld, fetcher);
  const homeworldName = homeworldData?.name || '';

  const [isShown, setIsShown] = useState(true);

  const getEndpointStyles = (endpoint: string) => {
    switch (endpoint) {
      case 'people':
        return (
          <>
            <CardTitle
              className="text-xl text-gray-900 font-semibold z-30"
              // className="card-title text-2xl z-10 font-sans p-2 border-black  text-black px-1 lg:text-lg m-0 font-semibold whitespace-nowrap"
              name={data.name}
            />
            <HomeworldBackground
              homeworld={homeworldName}
              planet={homeworld}
              className="card-background w-full h-full bg-cover bg-center"
            />

            <CardFace
              data={data}
              className="card-face flex justify-end h-full w-full"
              // className="card-face absolute bottom-36 -right-12 mr-1 mb-14 z-20"
            />
            <CardBack isShown={isShown} className="text-xs">
              {/* {data.name && <p>Name: {data.name}</p>}
              {data.height && <p>Height: {data.height}</p>}
              {data.mass && <p>Mass: {data.mass}</p>}
              {data.hair_color && <p>Hair Color: {data.hair_color}</p>}
              {data.skin_color && <p>Skin Color: {data.skin_color}</p>}
              {data.eye_color && <p>Eye Color: {data.eye_color}</p>}
              {data.birth_year && <p>Birth Year: {data.birth_year}</p>}
              {data.gender && <p>Gender: {data.gender}</p>}
              {data.homeworld && <p>Homeworld: {data.homeworld}</p>} */}
              {data.films && (
                <div>
                  <p>Films:</p>
                  <ul>
                    {data.films.map((film, index) => (
                      <li key={index}>{film}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.species && (
                <div>
                  <p>Species:</p>
                  <ul>
                    {data.species.map((species, index) => (
                      <li key={index}>{species}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.vehicles && (
                <div>
                  <p>Vehicles:</p>
                  <ul>
                    {data.vehicles.map((vehicle, index) => (
                      <li key={index}>{vehicle}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.starships && (
                <div>
                  <p>Starships:</p>
                  <ul>
                    {data.starships.map((starship, index) => (
                      <li key={index}>{starship}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardBack>
          </>
        );
      case 'planets':
        return (
          <>
            {data.rotation_period && (
              <p>Rotation Period: {data.rotation_period}</p>
            )}
            {data.orbital_period && (
              <p>Orbital Period: {data.orbital_period}</p>
            )}
            {data.diameter && <p>Diameter: {data.diameter}</p>}
            {data.climate && <p>Climate: {data.climate}</p>}
            {data.gravity && <p>Gravity: {data.gravity}</p>}
            {data.terrain && <p>Terrain: {data.terrain}</p>}
            {data.surface_water && <p>Surface Water: {data.surface_water}</p>}
            {data.population && <p>Population: {data.population}</p>}
            {data.residents && (
              <div>
                <p>Residents:</p>
                <ul>
                  {data.residents.map((resident, index) => (
                    <li key={index}>{resident}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      case 'species':
        return (
          <>
            {' '}
            {data.classification && (
              <p>Classification: {data.classification}</p>
            )}
            {data.designation && <p>Designation: {data.designation}</p>}
            {data.average_height && (
              <p>Average Height: {data.average_height}</p>
            )}
            {data.skin_colors && (
              <p>
                Skin Colors:
                {data.skin_colors}
              </p>
            )}
            {data.hair_colors && (
              <p>
                Hair Colors:
                {data.hair_colors}
              </p>
            )}
            {data.eye_colors && (
              <p>
                Eye Colors:
                {data.eye_colors}
              </p>
            )}
            {data.average_lifespan && (
              <p>Average Lifespan: {data.average_lifespan}</p>
            )}
            {data.language && <p>Language: {data.language}</p>}
            {data.people && (
              <div>
                <p>People:</p>
                <ul>
                  {data.people.map((person, index) => (
                    <li key={index}>{person}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      case 'vehicles':
        return (
          <>
            {' '}
            {data.model && <p>Model: {data.model}</p>}
            {data.manufacturer && <p>Manufacturer: {data.manufacturer}</p>}
            {data.cost_in_credits && (
              <p>Cost in Credits: {data.cost_in_credits}</p>
            )}
            {data.length && <p>Length: {data.length}</p>}
            {data.max_atmosphering_speed && (
              <p>Max Atmosphering Speed: {data.max_atmosphering_speed}</p>
            )}
            {data.crew && <p>Crew: {data.crew}</p>}
            {data.passengers && <p>Passengers: {data.passengers}</p>}
            {data.cargo_capacity && (
              <p>Cargo Capacity: {data.cargo_capacity}</p>
            )}
            {data.consumables && <p>Consumables: {data.consumables}</p>}
            {data.vehicle_class && <p>Vehicle Class: {data.vehicle_class}</p>}
            {data.pilots && (
              <div>
                <p>Pilots:</p>
                <ul>
                  {data.pilots.map((pilot, index) => (
                    <li key={index}>{pilot}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      case 'starships':
        return (
          <>
            {' '}
            {data.hyperdrive_rating && (
              <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
            )}
            {data.MGLT && <p>MGLT: {data.MGLT}</p>}
            {data.starship_class && (
              <p>Starship Class: {data.starship_class}</p>
            )}
          </>
        );
      case 'films':
        return (
          <>
            <p>Title: {data.title}</p>
            {data.episode_id && <p>Episode: {data.episode_id}</p>}
            {data.opening_crawl && <p>Opening Crawl: {data.opening_crawl}</p>}
            {data.director && <p>Director: {data.director}</p>}
            {data.producer && <p>Producer: {data.producer}</p>}
            {data.release_date && <p>Release Date: {data.release_date}</p>}
            {data.characters && (
              <>
                <p>Characters in film:</p>
                <ul>
                  {data.characters.map((character, index) => (
                    <li key={index}>{character}</li>
                  ))}
                </ul>
              </>
            )}
            {data.planets && (
              <>
                <p>Planets in film:</p>
                <ul>
                  {data.planets.map((planet, index) => (
                    <li key={index}>{planet}</li>
                  ))}
                </ul>
              </>
            )}
            {data.starships && (
              <>
                <p>Starships in film:</p>
                <ul>
                  {data.starships.map((starship, index) => (
                    <li key={index}>{starship}</li>
                  ))}
                </ul>
              </>
            )}
            {data.vehicles && (
              <>
                <p>Vehicles in film:</p>
                <ul>
                  {data.vehicles.map((vehicle, index) => (
                    <li key={index}>{vehicle}</li>
                  ))}
                </ul>
              </>
            )}
            {data.species && (
              <>
                <p>Species in film:</p>
                <ul>
                  {data.species.map((species, index) => (
                    <li key={index}>{species}</li>
                  ))}
                </ul>
              </>
            )}
            {data.url && <p>URL: {data.url}</p>}
          </>
        );
      default:
        return '';
    }
  };

  const fullPlanetName = homeworld || planetName;

  return (
    <Card
      className={`card border-black text-black border-2 rounded-lg w-full bg-${homeworldName} ${
        isShown ? '' : 'opacity-70'
      } `}
      isLoading={isLoading}
      key={key}
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
      image={<>{getEndpointStyles(endpoint)}</>}
    />
  );
};

export default SwapiCard;
