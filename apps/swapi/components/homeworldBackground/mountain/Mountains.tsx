import { useState, useEffect } from 'react';
import mountainStyles from './mountains.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Mountains = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className={`w-96 h-96 lg:w-80 xl:w-72 ${mountainStyles.bgMountains}`}>
      <div
        className={`${mountainStyles.mountain1} absolute bottom-0 z-4`}
      ></div>
      <div
        className={`${mountainStyles.mountain2} absolute bottom-0 left-24 z-3`}
      ></div>
      <div
        className={`${mountainStyles.mountain3} absolute bottom-0 z-2`}
      ></div>
      <div
        className={`${mountainStyles.mountain4} absolute bottom-0 z-1 -left-16`}
      ></div>
      <div
        className={`${mountainStyles.mountainSun} absolute h-16 w-16 rounded-full right-40 top-16`}
      ></div>
      <div className={`${mountainStyles.mountainStar}`}>
        <div className="absolute h-1 w-1 bg-white rounded-full left-2.5 top-5"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full left-24 md:left-16 lg:left-8 top-16"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full left-66 lg:left-58 top-20"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full left-32 md:left-52 top-5 md:top-12"></div>
        <div className="absolute h-2 w-2 bg-white rounded-full left-32 md:left-44 top-36"></div>
        <div className="absolute h-3 w-3 bg-white rounded-full left-80 top-24"></div>
        <div className="absolute h-1 w-1 bg-white rounded-full left-5 top-24"></div>
      </div>
    </div>
  );
};

export default Mountains;
