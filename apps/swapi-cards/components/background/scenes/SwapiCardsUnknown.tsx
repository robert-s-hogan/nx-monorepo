import { useState, useEffect } from 'react';

interface SwapiCardsUnknownProps {
  homeworld: string;
  terrain: string;
}

// Star component for a single star
function SwapiCardsStar() {
  // Random positioning for each star
  const style = {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  };

  return (
    <div className="bg-white h-[1px] w-[1px] absolute" style={style}></div>
  );
}

const SwapiCardsUnknown: React.FC<SwapiCardsUnknownProps> = ({
  homeworld,
  terrain,
}) => {
  const starCount = 100; // Number of stars to display

  return (
    <div className="relative w-96 h-96 lg:w-80 xl:w-72 bg-black z-0">
      <h3 className="z-10 absolute right-0 m-0 uppercase p-4 text-2xl font-light pr-6 text-white">
        {homeworld}{' '}
      </h3>
      {/* Generating multiple stars dynamically */}
      {Array.from({ length: starCount }).map((_, index) => (
        <SwapiCardsStar key={index} />
      ))}
    </div>
  );
};

export default SwapiCardsUnknown;
