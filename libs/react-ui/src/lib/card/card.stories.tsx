import React from 'react';
import { Card } from './card';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'This is a description of the card.',
  image: 'https://via.placeholder.com/150',
  onClick: action('onClick'),
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithButton = Template.bind({});
WithButton.args = {
  title: 'Card Title',
  description: 'This is a description of the card.',
  image: 'https://via.placeholder.com/150',
  onClick: action('onClick'),
  button: <button>Click me</button>,
};
