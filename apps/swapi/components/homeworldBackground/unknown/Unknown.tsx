import { useState, useEffect } from 'react';
import unknownStyles from './unknown.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Mountains: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className={`${unknownStyles.backgroundUnknown} w-96 h-96 lg:w-80 xl:w-72 background-unknown z-0`}
    >
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      {/* className={css.stars} */}
      <div id="stars" className={`${unknownStyles.stars}`}></div>
      <div id="stars2" className={`${unknownStyles.stars2}`}></div>
      <div id="stars3" className={`${unknownStyles.stars3}`}></div>
      <div id="title" className={`${unknownStyles.title}`}></div>
    </div>
  );
};

export default Mountains;
