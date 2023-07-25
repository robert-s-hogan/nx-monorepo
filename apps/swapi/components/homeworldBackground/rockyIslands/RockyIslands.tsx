import { useState, useEffect } from 'react';
import rockyStyles from './rockyIslands.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const RockyIslands = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className={`${rockyStyles.bgRockyIslands} w-96 h-96 md:w-full bg-rockyIslands`}
    >
      <div className={`${rockyStyles.sky}`}>
        <div className={`${rockyStyles.moon}`}>
          <div className={`${rockyStyles.stars} ${rockyStyles.stars1}`}></div>
          <div className={`${rockyStyles.stars} ${rockyStyles.stars2}`}></div>
          <div className={`${rockyStyles.shootingStar}`}></div>
          <div className={`${rockyStyles.mountains}`}></div>
          <div className={`${rockyStyles.lake}`}></div>
        </div>
      </div>
    </div>
  );
};

export default RockyIslands;
