import { useState, useEffect } from 'react';
import junglesStyles from './jungles.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Jungles: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className={`w-96 h-96 lg:w-80 xl:w-72 ${junglesStyles.bgJungles}`}
    ></div>
  );
};

export default Jungles;
