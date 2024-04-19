import { useState, useEffect } from 'react';

interface SwapiCardsJungleProps {
  homeworld: string;
  terrain: string | null;
}

const SwapiCardsJungle: React.FC<SwapiCardsJungleProps> = ({ homeworld }) => {
  const [homeworldName, setHomeworldName] = useState('');

  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div
      className="w-96 h-96 lg:w-80 xl:w-72 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1725723.jpg')",
      }}
    >
      <h3 className="absolute right-0 top-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-10">
        {homeworldName}
      </h3>
    </div>
  );
};

export default SwapiCardsJungle;
