import { CarouselProps } from '@with-nx/types';
import React, { useState } from 'react';

/* eslint-disable-next-line */
export const Carousel = ({ images }: CarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    const previousImageIndex =
      (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(previousImageIndex);
  };

  const goToNextImage = () => {
    const nextImageIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextImageIndex);
  };

  return (
    <div className="flex items-center justify-center relative">
      <img
        src={images[currentImageIndex]}
        alt={`Carousel Image ${currentImageIndex}`}
        className="w-full"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToPreviousImage}
          className="absolute left-4 text-4xl bg-transparent border-none text-white cursor-pointer"
        >
          &larr;
        </button>
        <button
          onClick={goToNextImage}
          className="absolute right-4 text-4xl bg-transparent border-none text-white cursor-pointer"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
