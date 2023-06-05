import React, { useState } from 'react';
import { RatingProps } from '@with-nx/types';

export const Rating: React.FC<RatingProps> = ({
  maxRating,
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(0);

  const handleClick = (index: number) => {
    setRating(index);
    onRatingChange(index);
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <button
          key={i}
          className={`text-yellow-500 text-2xl ${
            rating > i ? 'fas fa-star' : 'far fa-star'
          }`}
          onClick={() => handleClick(i + 1)}
        />
      ))}
    </div>
  );
};
