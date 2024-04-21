import { useState, useEffect } from 'react';

interface SwapiCardsOceanProps {
  homeworld: string;
  terrain: string | null;
}

const SwapiCardsOcean: React.FC<SwapiCardsOceanProps> = ({ homeworld }) => {
  const [homeworldName, setHomeworldName] = useState('');
  const [bubbleSizes, setBubbleSizes] = useState<number[]>([]);

  useEffect(() => {
    setHomeworldName(homeworld);
    // Generate bubble sizes on component mount or when `homeworld` changes
    setBubbleSizes(
      Array.from({ length: 10 }, () => Math.floor(Math.random() * 10) + 5)
    );
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-gradient-to-t from-darkBlue to-skyBlue overflow-hidden">
      <h3 className="absolute right-0 top-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white z-10">
        {homeworldName}
      </h3>
      <div className="bubbles relative w-full h-full space-x-2">
        {bubbleSizes.map((size, index) => (
          <span
            key={index}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity: ((index % 4) + 1) / 10,
              animation: `bubble ${(index % 4) + 5}s ease-in-out infinite`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="absolute bg-white rounded-full"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SwapiCardsOcean;
