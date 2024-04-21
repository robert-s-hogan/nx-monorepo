import { useState, useEffect } from 'react';
import SwapiCardsSky from '../partials/SwapiCardsSky';

interface SwapiCardsGasGiantProps {
  homeworld: string;
  terrain: string | null;
}

const SwapiCardsGasGiant: React.FC<SwapiCardsGasGiantProps> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 z-0 bg-[radial-gradient(ellipse_at_bottom,_#1b2735_0%,_#090a0f_100%)]">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      <div className="content-wrapper w-96 h-96 relative lg:w-80 xl:w-72 ">
        <SwapiCardsSky className="fill-sky" color="var(--sky)" />
        <pre className="bg-white text-black">Gas Giant</pre>
        <div className="gas-giant absolute top-0 left-0 w-96 h-96 z-[-1] shadow-inner rounded-full animate-rotatePlanet"></div>
      </div>
    </div>
  );
};

export default SwapiCardsGasGiant;
