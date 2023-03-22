import { useState, useEffect } from 'react';

interface Props {
  homeworld: string;
  fetchData: (url: string) => void;
}

const CardHomeworld: React.FC<Props> = (props) => {
  const { homeworld } = props;

  const [homeworldName, setHomeworldName] = useState('');

  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    setHomeworldName(json.name);
    return json.name;
  }

  useEffect(() => {
    fetchData(homeworld);
  }, [homeworld]);

  return <p>Homeworld: {homeworldName}</p>;
};

export default CardHomeworld;
