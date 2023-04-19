import styles from './carousel.module.css';
import React, { useState } from 'react';
import Button from '../button/button';

/* eslint-disable-next-line */
export interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {
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
    <div className="carousel">
      <img
        src={images[currentImageIndex]}
        alt={`Carousel Image ${currentImageIndex}`}
      />
      <div className="carousel-buttons">
        <Button
          icon={<span>&larr;</span>}
          onClick={goToPreviousImage}
          aria-label="Previous Image"
        />
        <Button
          icon={<span>&rarr;</span>}
          onClick={goToNextImage}
          aria-label="Next Image"
        />
      </div>
    </div>
  );
}

export default Carousel;
