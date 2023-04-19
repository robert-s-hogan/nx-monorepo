import carouselStyles from './carousel.module.css';
import React, { useState } from 'react';
import Button from '../button/button';

/* eslint-disable-next-line */
export interface CarouselProps {
  images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
}: CarouselProps) => {
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
        className={`carousel-image ${carouselStyles.carouselImage}`}
      />
      <div className="carousel-buttons">
        <Button
          icon={<span>&larr;</span>}
          onClick={goToPreviousImage}
          aria-label="Previous Image"
          className={`carousel-button-left ${carouselStyles.carouselButtonLeft}`}
        />
        <Button
          icon={<span>&rarr;</span>}
          onClick={goToNextImage}
          aria-label="Next Image"
          className={`carousel-button-right ${carouselStyles.carouselButtonRight}`}
        />
      </div>
    </div>
  );
};

export default Carousel;
