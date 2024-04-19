import { useState, useEffect } from 'react';
import Sky from './background/SwapiCardsSky';
import Mountain1 from './background/SwapiCardsMountainOne';
import Mountain2 from './background/SwapiCardsMountainTwo';
import Mountain3 from './background/SwapiCardsMountainThree';
import Foreground from './background/SwapiCardsForeground';
import Bush1 from './background/SwapiCardsBushOne';
import Bush from './background/SwapiCardsBush';
import Bush2 from './background/SwapiCardsBushTwo';
import Dirt from './background/SwapiCardsDirt';

const Scene = () => (
  <svg
    className="scene overflow-hidden"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2087 1350.21"
    style={{ height: '100%', position: 'absolute', left: '-33%', top: '-1%' }}
  >
    <Sky className="fill-sky" />
    <Mountain1 className="fill-mountain-one" />
    <Mountain2 className="fill-mountain-two" />
    <Mountain3 className="fill-mountain-three" />
    <Foreground className="fill-foreground" />
    <Bush1 className="fill-bush-one" />
    <Bush className="fill-bush" />
    <Bush2 className="fill-bush-two" />
    <Dirt className="fill-dirt" />
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
