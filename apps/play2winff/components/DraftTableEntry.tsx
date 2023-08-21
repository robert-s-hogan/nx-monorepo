import { useState } from 'react';

const DraftTableEntry = ({
  adp,
  name,
  position,
  playerId,
  hidden,
  togglePlayerVisibility,
}) => {
  const [show, toggleShow] = useState(true);

  const handleDelete = () => {
    console.log('Deleting player:', playerId);

    toggleShow(false);
    togglePlayerVisibility(playerId);
  };

  return (
    <div>
      {show && !hidden && (
        <div
          className={`grid grid-cols-9 gap-2 h-16 items-center cursor-pointer md:hover:bg-gray-100
          ${position === 'QB' && 'bg-red-400'}
          ${position === 'RB' && 'bg-blue-300'}
          ${position === 'WR' && 'bg-green-300'}
          ${position === 'TE' && 'bg-yellow-400'}
          ${position === 'PK' && 'bg-pink-400'}
          ${position === 'DEF' && 'bg-purple-400'}`}
          onClick={handleDelete} // Added onClick event listener
        >
          <p className="col-span-2 text-center text-black-custom">
            {Math.floor(adp)}
          </p>
          <p className="col-span-7 text-black-custom">{name}</p>
        </div>
      )}
    </div>
  );
};

export default DraftTableEntry;
