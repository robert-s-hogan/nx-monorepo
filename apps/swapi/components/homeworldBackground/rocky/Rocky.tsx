import { useState, useEffect } from 'react';
// import './rocky.scss';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Rocky = (props: Props) => {
  const { homeworld, terrain } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative md:w-full bg-rocky z-0">
      {terrain && (
        <div className={`absolute z-20 w-96 h-96 bg-${terrain}`}></div>
      )}
      <div className="main h-96 w-96 absolute">
        <div className="rocky-sun h-32 w-32"></div>
        <div className="dirt"></div>
        <div className="cliff w-64 h-64">
          <div className="cliff-top"></div>
          <div className="cliff-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Rocky;
