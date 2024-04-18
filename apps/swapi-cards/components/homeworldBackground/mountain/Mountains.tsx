import { useState, useEffect } from 'react';
import './mountains.css';

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
    <div className="w-96 h-96 lg:w-80 xl:w-72 bg-mountains">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworldName}
      </h3>
      <div className="mountain-1 absolute bottom-0 z-4"></div>
      <div className="mountain-2 absolute bottom-0 left-24 z-3"></div>
      <div className="mountain-3 absolute bottom-0 z-2"></div>
      <div className="mountain-4 absolute bottom-0 z-1 -left-16"></div>
      <div className="mountain-sun absolute h-16 w-16 rounded-full right-40 top-16"></div>
      <div className="mountain-star">
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
