import { useState, useEffect } from 'react';
import './rockyIslands.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const RockyIslands: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 lg:w-80 xl:w-72 bg-rockyIslands">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      <div className="sky">
        <div className="moon">
          <div className="stars stars1">*</div>
          <div className="stars stars2">*</div>
          <div className="shooting-star"></div>
          <div className="mountains"></div>
          <div className="lake"></div>
        </div>
      </div>
    </div>
  );
};

export default RockyIslands;
