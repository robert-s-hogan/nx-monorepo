import React from 'react';
import { Meta, Story } from '@storybook/react';
import Carousel, { CarouselProps } from './carousel';

const meta: Meta = {
  component: Carousel,
  title: 'Carousel',
};
export default meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://via.placeholder.com/800x600?text=Image+1',
    'https://via.placeholder.com/800x600?text=Image+2',
    'https://via.placeholder.com/800x600?text=Image+3',
  ],
};
