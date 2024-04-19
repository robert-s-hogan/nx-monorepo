import { useState, useEffect } from 'react';

interface SwapiCardsToxicCloudseaProps {
  homeworld: string;
  terrain: string | null;
}

const SwapiCardsToxicCloudsea: React.FC<SwapiCardsToxicCloudseaProps> = ({
  homeworld,
}) => {
  const [homeworldName, setHomeworldName] = useState('');

  useEffect(() => {
    setHomeworldName(homeworld);
  }, [homeworld]);

  return (
    <div className="w-96 h-96 relative lg:w-80 xl:w-72 bg-gradient-to-t from-cyan-900 to-cyan-300 z-0 overflow-hidden">
      <h3 className="absolute right-0 top-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-black z-10">
        {homeworldName}
      </h3>
      <div
        className="cloud-container absolute inset-0 grid place-items-center bg-cover rotate-180"
        style={{
          backgroundImage:
            "url('https://www.seekpng.com/png/full/1-18983_thunder-cloud-png-clip-art-transparent-library-thunder.png')",
        }}
      >
        <div className="square w-72 h-72 relative filter drop-shadow-lg rotate-45">
          <div className="square-inner border-8 border-solid border-transparent rounded-lg"></div>
        </div>
      </div>
      <div className="bubbles absolute bottom-10 flex space-x-2">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="block w-2 h-2 bg-white rounded-full"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SwapiCardsToxicCloudsea;
