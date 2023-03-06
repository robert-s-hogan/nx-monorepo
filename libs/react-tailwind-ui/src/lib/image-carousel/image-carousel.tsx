import React, { useState, useEffect } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

export interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    setSliderWidth(document.querySelector('.carousel').clientWidth);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handlePrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(images.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide === images.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="relative carousel">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-full h-full w-full transition-transform duration-500 ease-in-out ${
              currentSlide !== index && '-translate-x-full'
            }`}
          >
            <div className="text-center">
              <p className="text-red-500">Slide {currentSlide + 1}</p>
              <img src={slide} alt="" className="mx-auto" />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="flex space-x-3">
          {images.map((slide, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <button
        className={`absolute top-1/2 left-4 text-white transform -translate-y-1/2 focus:outline-none bg-gray-700 ${
          currentSlide === 0 && 'opacity-50 cursor-default'
        }`}
        onClick={handlePrevSlide}
        disabled={currentSlide === 0}
      >
        <BsFillCaretLeftFill size={60} />
      </button>
      <button
        className={`absolute top-1/2 right-4 text-white transform -translate-y-1/2 focus:outline-none bg-gray-700 ${
          currentSlide === images.length - 1 && 'opacity-50 cursor-default'
        }`}
        onClick={handleNextSlide}
        disabled={currentSlide === images.length - 1}
      >
        <BsFillCaretRightFill size={60} />
      </button>
    </div>
  );
};

export default ImageCarousel;
