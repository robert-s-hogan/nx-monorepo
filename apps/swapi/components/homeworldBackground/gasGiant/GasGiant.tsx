import { useState, useEffect } from 'react';
import gasGiantStyles from './gasGiant.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const GasGiant = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className={`w-96 h-96 relative md:w-full ${gasGiantStyles.bgGasGiant} z-0`}
    >
      <div
        className={`${gasGiantStyles.planet} absolute top-0 -left-24 lg:left-0 w-96 h-96 -z-1 shadow-inner rounded-full`}
      ></div>
      <div id="stars" className={`${gasGiantStyles.stars} z-1`}></div>
      <div id="stars2" className={`${gasGiantStyles.stars2} z-1`}></div>
      <div id="stars3" className={`${gasGiantStyles.stars3} z-1`}></div>
    </div>
  );
};

export default GasGiant;
