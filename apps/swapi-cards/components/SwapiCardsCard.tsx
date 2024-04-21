import React, { useState, useEffect, useMemo } from 'react';

import CardFace from './SwapiCardsFace';
// import CardHomeworld from '../cardHomeworld/CardHomeworld';
import HomeworldBackground from './homeworldBackground/HomeworldBackground';
import useSWAPIFetch from '../hooks/useSWAPIFetch';

interface SwapiCardsCardProps {
  name: string;
  mass: string; // Updated to string if the API provides a string
  height: string; // Updated to string if the API provides a string
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string; // Updated to string if the API provides a string
  homeworld: string;
  gender: string;
}

const SwapiCardsCard = React.memo<SwapiCardsCardProps>(
  ({
    name,
    mass,
    height,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
  }) => {
    const [isShown, setIsShown] = useState(true);
    const [homeworldName, setHomeworldName] = useState('');
    const { data, loading, error } = useSWAPIFetch<string>(
      homeworld,
      !!homeworld
    );

    useEffect(() => {
      // Assuming 'data' contains the name of the homeworld directly
      if (data && !loading && !error) {
        setHomeworldName(data[0]);
      }
    }, [data, loading, error]);

    return (
      <div
        className={`card bg-${homeworldName} rounded-lg relative h-96 overflow-hidden w-full md:w-84 lg:w-80 xl:w-72 ${
          isShown ? `` : 'opacity-70'
        }`}
        key={name}
        onMouseEnter={() => setIsShown(false)}
        onMouseLeave={() => setIsShown(true)}
      >
        <CardFace
          name={name}
          hairColor={hair_color}
          eyeColor={eye_color}
          gender={gender}
          skinColor={skin_color}
          homeworld={homeworldName}
          styles="card-face container absolute bottom-36 -right-28 mr-1 mb-9 z-10"
        />
        <HomeworldBackground
          homeworld={homeworldName}
          planet={homeworld}
          styles="card-background absolute overflow-hidden inner-box absolute h-96 w-full md:w-96 lg:w-80 xl:w-72 -z-10"
        />
        {/* {!isShown && (
          <>
            <p>{name}</p>
            <div
              className={
                !isShown
                  ? 'absolute top-0 w-full transition ease-in-out delay-300 bg-white  h-80 mt-14 z-10'
                  : ''
              }
            >
              <div className="card-inner h-full flex flex-col">
                <ul className="px-4">
                  <li className="mx-0">Mass: {mass}</li>
                  <li className="mx-0">Height: {height}</li>
                  <li className="mx-0">DOB: {birth_year}</li>
                  <li className="mx-0">Hair Color: {hair_color}</li>
                  <li className="mx-0">Skin Color: {skin_color}</li>
                  <li className="mx-0">Gender: {gender}</li>
                  <li className="mx-0">Eye Color: {eye_color}</li>
                </ul>
              </div>
            </div>
          </>
        )} */}
      </div>
    );
  }
);

export default SwapiCardsCard;
