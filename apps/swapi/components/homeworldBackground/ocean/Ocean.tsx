import { useState, useEffect } from 'react';
import oceanStyles from './ocean.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Ocean = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className={`${oceanStyles.bgOcean} "w-96 h-96 lg:w-80 xl:w-72 bg-ocean z-0`}
    >
      <div className={`${oceanStyles.bubbles} "bubbles"`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Ocean;
