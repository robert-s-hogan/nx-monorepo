import { useState, useEffect } from 'react';
// import css from './unknown.css';

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
    <div className="w-96 h-96 lg:w-80 xl:w-72 background-unknown z-0">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      {/* className={css.stars} */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title"></div>
    </div>
  );
};

export default Mountains;
