// PlanetsCard.tsx
import React from 'react';
import CardTitle from './CardTitle';
import HomeworldBackground from './homeworldBackground/HomeworldBackground';

interface PlanetsCardProps {
  data: any;
}

const PlanetsCard: React.FC<PlanetsCardProps> = ({ data }) => {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <HomeworldBackground planet={data.url} />
      <p>Rotation Period: {data.rotation_period}</p>
      <p>Orbital Period: {data.orbital_period}</p>
      {/* rest of your data */}
      <CardTitle
        className="absolute top-4 right-4 text-white text-lg font-semibold"
        name={data.name}
      />
    </div>
  );
};

export default PlanetsCard;
