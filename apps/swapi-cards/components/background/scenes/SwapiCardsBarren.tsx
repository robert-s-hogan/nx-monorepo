import { useState, useEffect } from 'react';
import Cactus from '../partials/SwapiCardsCactus';
import Mountain from '../partials/SwapiCardsMountainOne';
import Sky from '../partials/SwapiCardsSky';
import Sun from '../partials/SwapiCardsSun';

interface SwapiCardsBarrenProps {
  homeworld: string;
  terrain: string | null;
}

const SwapiCardsBarren: React.FC<SwapiCardsBarrenProps> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-barren z-0">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black">
        {homeworldName}
      </h3>
      <div className="content-wrapper w-96 h-96 relative lg:w-80 xl:w-72 ">
        <Sky className="fill-sky" color="var(--sky)" />
        <Sun className="fill-sun" color="var(--sun)" />
        <Mountain className="fill-mountain" color="var(--mountain)" />
        <Cactus className="fill-cactus" color="var(--cactus)" />
      </div>
    </div>
  );
};

export default SwapiCardsBarren;
