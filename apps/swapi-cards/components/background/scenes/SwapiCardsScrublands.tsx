import { useState, useEffect } from 'react';
import Sky from '../partials/SwapiCardsSky';
import Sun from '../partials/SwapiCardsSun';
import Mountain from '../partials/SwapiCardsMountainOne';
import Mountain2 from '../partials/SwapiCardsMountainTwo';
import Mountain3 from '../partials/SwapiCardsMountainThree';
import Foreground from '../partials/SwapiCardsForeground';
import Bush1 from '../partials/SwapiCardsBushOne';
import Bush from '../partials/SwapiCardsBush';
import Bush2 from '../partials/SwapiCardsBushTwo';
import Dirt from '../partials/SwapiCardsDirt';
import Cactus from '../partials/SwapiCardsCactus';

const Scene = () => (
  <svg
    className="scene overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2087 1350.21"
    style={{ height: '100%', position: 'absolute', left: '-33%', top: '-1%' }}
  >
    <Sky className="fill-sky" color="var(--sky)" />
    <Mountain className="fill-mountain-one" color="var(--mountain-one)" />
    <Mountain2 className="fill-mountain-two" color="var(--mountain-two)" />
    <Mountain3 className="fill-mountain-three" color="var(--mountain-three)" />
    <Foreground className="fill-foreground" color="var(--foreground)" />
    <Bush1 className="fill-bush-one" color="var(--bush-one)" />
    <Bush className="fill-bush" color="var(--bush)" />
    <Bush2 className="fill-bush-two" color="var(--bush-two)" />
    <Dirt className="fill-dirt" color="var(--dirt)" />
    <Sun className="fill-sun" color="var(--sun)" />
    <Cactus className="fill-cactus" color="var(--cactus)" />
  </svg>
);

interface SwapiCardsScrublandsProps {
  homeworld: string;
  terrain: string | null;
}

const SwapiCardsScrublands: React.FC<SwapiCardsScrublandsProps> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 lg:w-80 xl:w-72 bg-scrublands">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      <Scene />
    </div>
  );
};

export default SwapiCardsScrublands;
