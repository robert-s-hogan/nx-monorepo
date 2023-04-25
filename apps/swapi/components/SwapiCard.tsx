import { useState, useEffect } from 'react';
import { Card } from '@with-nx/react-ui';

import CardTitle from './CardTitle';
import CardBack from './CardBack';
import CardFace from './CardFace';
import HomeworldBackground from './homeworldBackground/HomeworldBackground';

interface Props {
  name: string;
  mass: string;
  height: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  homeworld: string;
  gender: string;
}

const SwapiCard: React.FC<Props> = (props) => {
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
  } = props;

  const [homeworldName, setHomeworldName] = useState('');
  const [isShown, setIsShown] = useState(true);

  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    setHomeworldName(json.name);
    return json.name;
  }

  useEffect(() => {
    fetchData(homeworld);
  }, [homeworld]);

  return (
    <Card
      className={`card border-black text-black border-2 rounded-lg w-full bg-${homeworldName}  ${
        isShown ? `` : 'opacity-70'
      }`}
      key={name}
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
          <HomeworldBackground
            homeworld={homeworldName}
            planet={homeworld}
            className="card-background w-full h-full bg-cover bg-center"
            // className="card-background absolute overflow-hidden top-0 left-0 w-full h-full z-0"
          />

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
