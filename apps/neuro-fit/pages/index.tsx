import React from 'react';
import Image from 'next/image';

import { Heading, Text } from '@with-nx/react-ui';
import Carousel from '../components/Carousel';
import NeuroFitLayout from '../components/NeuroFitLayout';

function Index() {
  const slides = [
    {
      src: 'https://placekitten.com/200/300',
      title: 'Kitten One',
      description: 'This is a cute kitten.',
    },
    {
      src: 'https://placekitten.com/200/300',
      title: 'Kitten Two',
      description: 'Another cute kitten.',
    },
    {
      src: 'https://placekitten.com/200/300',

      title: 'Kitten Three',
      description: 'Yet another cute kitten.',
    },
  ];

  return (
    <NeuroFitLayout>
      <div className="max-w-lg mx-auto my-32">
        <Carousel>
          {slides.map((slide, index) => (
            <div key={index} className="text-center p-4">
              <Image
                src={slide.src}
                alt={slide.title}
                width={200}
                height={300}
                className="mx-auto"
              />
              <Heading level={2} className="text-lg font-semibold text-text-color">
                {slide.title}
              </Heading>
              <Text className="text-text-color">{slide.description}</Text>
            </div>
          ))}
        </Carousel>
      </div>
    </NeuroFitLayout>
  );
}

export default Index;
