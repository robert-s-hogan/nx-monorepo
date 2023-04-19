import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hero, HeroProps } from './hero';

const meta: Meta = {
  component: Hero,
  title: 'Hero',
};
export default meta;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hero Title',
  subtitle: 'Hero Subtitle',
  backgroundImage: 'https://via.placeholder.com/1920x1080',
  buttonClassName: 'hero-button',
  buttonText: 'Hero Button',
  onButtonClick: () => console.log('Hero Button Clicked'),
  className: 'hero-section',
  layout: 'default',
};
