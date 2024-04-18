import { useState, useEffect } from 'react';
import SwapiCardsCactus from './SwapiCardsCactus';
import SwapiCardsMountain from './SwapiCardsMountain';
import SwapiCardsSky from './SwapiCardsSky';
import SwapiCardsSun from './SwapiCardsSun';

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
        <SwapiCardsSky count={50} />
        <SwapiCardsSun />
        <SwapiCardsMountain />
        <SwapiCardsCactus />
      </div>
    </div>
  );
};

export default SwapiCardsBarren;
