// import { useState, useEffect } from 'react';
// import { Card, Skeleton } from '@with-nx/react-ui';
// import useSWR from 'swr';

// import CardTitle from './CardTitle';
// import CardBack from './CardBack';
// import CardFace from './CardFace';
// import HomeworldBackground from './homeworldBackground/HomeworldBackground';

// interface SwapiCardProps {
//   key?: string;
//   person?: {
//     name?: string;
//     mass?: string;
//     height?: string;
//     hair_color?: string;
//     skin_color?: string;
//     eye_color?: string;
//     birth_year?: string;
//     homeworld?: string;
//     gender?: string;
//   };
//   isLoading?: boolean;
// }

// const fetcher = async (url) => {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };

// const SwapiCard: React.FC<SwapiCardProps> = ({ key, person, isLoading }) => {
//   const {
//     name,
//     mass,
//     height,
//     hair_color,
//     skin_color,
//     eye_color,
//     birth_year,
//     gender,
//     homeworld,
//   } = person;

//   const { data: homeworldData } = useSWR(homeworld, fetcher);
//   const homeworldName = homeworldData?.name || '';

//   const [isShown, setIsShown] = useState(true);

//   return (
//     <Card
//       className={`card border-black text-black border-2 rounded-lg w-full bg-${homeworldName}  ${
//         isShown ? `` : 'opacity-70'
//       }`}
//       isLoading={isLoading}
//       key={key}
//       onMouseEnter={() => setIsShown(false)}
//       onMouseLeave={() => setIsShown(true)}
//       image={
//         <div className="h-full">
//           {/* <CardTitle
//             className="text-xl text-gray-900 font-semibold z-30"
//             // className="card-title text-2xl z-10 font-sans p-2 border-black  text-black px-1 lg:text-lg m-0 font-semibold whitespace-nowrap"
//             name={name}
//             eyeColor={eye_color}
//           /> */}
//           {homeworld && (
//             <HomeworldBackground
//               homeworld={homeworldName}
//               planet={homeworld}
//               className="card-background w-full h-full bg-cover bg-center"
//             />
//           )}

//           <CardFace
//             name={name}
//             hairColor={hair_color}
//             eyeColor={eye_color}
//             gender={gender}
//             skinColor={skin_color}
//             homeworld={homeworldName}
//             className="card-face flex justify-end h-full w-full"
//             // className="card-face absolute bottom-36 -right-12 mr-1 mb-14 z-20"
//           />
//           {/* <CardBack isShown={isShown} {...props} /> */}
//         </div>
//       }
//     />
//   );
// };

// export default SwapiCard;

// components/SwapiCard.tsx
import React, { useState } from 'react';
import { Card } from '@with-nx/react-ui';
import useSWR from 'swr';

const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

interface SwapiCardProps {
  key?: string;
  data: any;
  isLoading?: boolean;
}

const SwapiCard: React.FC<SwapiCardProps> = ({ key, data, isLoading }) => {
  const { homeworld } = data;
  const { data: homeworldData } = useSWR(homeworld, fetcher);
  const homeworldName = homeworldData?.name || '';

  const [isShown, setIsShown] = useState(true);

  console.log(`data`, data);

  const renderCardContent = () => {
    if ('name' in data) {
      return (
        <div>
          <p>Name: {data.name}</p>
          {data.height && <p>Height: {data.height}</p>}
          {data.mass && <p>Mass: {data.mass}</p>}
          {data.hair_color && <p>Hair Color: {data.hair_color}</p>}
          {data.skin_color && <p>Skin Color: {data.skin_color}</p>}
          {data.eye_color && <p>Eye Color: {data.eye_color}</p>}
          {data.birth_year && <p>Birth Year: {data.birth_year}</p>}
          {data.gender && <p>Gender: {data.gender}</p>}
          {data.homeworld && <p>Homeworld: {data.homeworld}</p>}
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
        </div>
      );
    } else if ('title' in data) {
      return (
        <div className="p-6 overflow-auto">
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
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <Card
      className={`card border-black text-black border-2 rounded-lg w-full bg-${homeworldName}  ${
        isShown ? '' : 'opacity-70'
      }`}
      isLoading={isLoading}
      key={key}
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
      image={renderCardContent()}
    />
  );
};

export default SwapiCard;
