import { useState, useEffect } from 'react';
import './toxicCloudsea.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const ToxicCloudsea: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-toxicCloudsea z-0">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black">
        {homeworldName}
      </h3>
      <div className="cloud-container">
        <div className="square">
          <div className="square-inner"></div>
        </div>
      </div>
      <div className="bubbles absolute bottom-10">
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

export default ToxicCloudsea;
