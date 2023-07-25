// PeopleCard.tsx
import React from 'react';
import CardFace from './CardFace';
import CardTitle from './CardTitle';
import CardBack from './CardBack';
import HomeworldBackground from './homeworldBackground/HomeworldBackground';

interface PeopleCardProps {
  data: any;
}

const PeopleCard: React.FC<PeopleCardProps> = ({ data }) => {
  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">

      <HomeworldBackground planet={data.homeworld} />
      <CardTitle
        className="absolute top-4 right-4 text-white text-lg font-semibold"
        name={data.name}
      />
      <CardFace className="absolute bottom-48 right-4 z-40" data={data} />
      {/* <CardBack isShown={true} data={data} /> */}
    </div>
  );
};

export default PeopleCard;
