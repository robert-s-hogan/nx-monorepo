import { useState, useEffect } from 'react';
import './gasGiant.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const GasGiant: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-gasGiant z-0">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      <div className="planet absolute top-0 -left-24 w-96 h-96 -z-1 shadow-inner rounded-full"></div>
      <div id="stars" className="z-1"></div>
      <div id="stars2" className="z-1"></div>
      <div id="stars3" className="z-1"></div>
    </div>
  );
};

export default GasGiant;
