import { useState, useEffect } from 'react';
import unknownStyles from './unknown.module.css';

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
    <div
      className={`${unknownStyles.backgroundUnknown} w-96 h-96 md:w-full background-unknown z-0`}
    >
      {/* className={css.stars} */}
      <div id="stars" className={`${unknownStyles.stars}`}></div>
      <div id="stars2" className={`${unknownStyles.stars2}`}></div>
      <div id="stars3" className={`${unknownStyles.stars3}`}></div>
      <div id="title" className={`${unknownStyles.title}`}></div>
    </div>
  );
};

export default Mountains;
