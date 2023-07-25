import { useState, useEffect } from 'react';
import junglesStyles from './jungles.module.css';

interface Props {
  homeworld: string;
  terrain: string | null;
}

const Jungles = (props: Props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');
  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className={`w-96 h-96 md:w-full ${junglesStyles.bgJungles}`}></div>
  );
};

export default Jungles;
