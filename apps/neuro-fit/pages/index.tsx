import React from 'react';
import Image from 'next/image';
import Carousel from '../components/Carousel';

function Index() {
  const slides = [
    {
      src: 'https://placekitten.com/200/300',
      alt: 'Kitten 1',
      title: 'Kitten One',
      description: 'This is a cute kitten.',
    },
    {
      src: 'https://placekitten.com/200/300',
      alt: 'Kitten 2',
      title: 'Kitten Two',
      description: 'Another cute kitten.',
    },
    {
      src: 'https://placekitten.com/200/300',
      alt: 'Kitten 3',
      title: 'Kitten Three',
      description: 'Yet another cute kitten.',
    },
  ];

  return (
    <div className="max-w-lg mx-auto my-32">
      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className="text-center p-4">
            <Image
              src={slide.src}
              alt={slide.alt}
              width={200}
              height={300}
              className="mx-auto"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {slide.title}
            </h2>
            <p className="text-gray-600">{slide.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Index;
