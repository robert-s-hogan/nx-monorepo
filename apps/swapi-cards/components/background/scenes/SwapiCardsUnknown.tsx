import { useState } from 'react';

function SwapiCardsStar({ top, left }: { top: string; left: string }) {
  return (
    <div
      className="bg-white h-[1px] w-[1px] absolute"
      style={{ top, left }}
    ></div>
  );
}

export default function SwapiCardsUnknown() {
  const starCount = 100; // Number of stars to display

  // Randomized exactly once, at mount, via useState's lazy initializer --
  // computing these inline during render (or in useMemo, which is only a
  // cache and may still re-run) made every re-render reshuffle every star.
  const [starPositions] = useState(() =>
    Array.from({ length: starCount }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }))
  );

  return (
    <div className="relative w-96 h-96 lg:w-80 xl:w-72 bg-black z-0">
      {starPositions.map((position, index) => (
        <SwapiCardsStar key={index} {...position} />
      ))}
    </div>
  );
}
