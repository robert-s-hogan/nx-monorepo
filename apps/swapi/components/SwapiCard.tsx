import { useState, useEffect } from 'react';
import { Card, Skeleton } from '@with-nx/react-ui';
import useSWR from 'swr';

import CardTitle from './CardTitle';
import CardBack from './CardBack';
import CardFace from './CardFace';
import HomeworldBackground from './homeworldBackground/HomeworldBackground';

interface SwapiCardProps {
  key?: string;
  person: {
    name: string;
    mass: string;
    height: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    homeworld: string;
    gender: string;
  };
  isLoading?: boolean;
}

const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const SwapiCard: React.FC<SwapiCardProps> = ({ key, person, isLoading }) => {
  const {
    name,
    mass,
    height,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  } = person;

  const { data: homeworldData } = useSWR(homeworld, fetcher);
  const homeworldName = homeworldData?.name || '';

  const [isShown, setIsShown] = useState(true);

  return (
    <Card
      className={`card border-black text-black border-2 rounded-lg w-full bg-${homeworldName}  ${
        isShown ? `` : 'opacity-70'
      }`}
      isLoading={isLoading}
      key={key}
      onMouseEnter={() => setIsShown(false)}
      onMouseLeave={() => setIsShown(true)}
      image={
        <div className="h-full">
          {/* <CardTitle
            className="text-xl text-gray-900 font-semibold z-30"
            // className="card-title text-2xl z-10 font-sans p-2 border-black  text-black px-1 lg:text-lg m-0 font-semibold whitespace-nowrap"
            name={name}
            eyeColor={eye_color}
          /> */}
          {homeworld && (
            <HomeworldBackground
              homeworld={homeworldName}
              planet={homeworld}
              className="card-background w-full h-full bg-cover bg-center"
            />
          )}

          <CardFace
            name={name}
            hairColor={hair_color}
            eyeColor={eye_color}
            gender={gender}
            skinColor={skin_color}
            homeworld={homeworldName}
            className="card-face flex justify-end h-full w-full"
            // className="card-face absolute bottom-36 -right-12 mr-1 mb-14 z-20"
          />
          {/* <CardBack isShown={isShown} {...props} /> */}
        </div>
      }
    />
  );
};

export default SwapiCard;
