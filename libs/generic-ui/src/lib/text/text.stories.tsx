import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const SimpleText = Template.bind({});
SimpleText.args = {
  text: 'Simple text example.',
  className: '',
};

export const BoldText = Template.bind({});
BoldText.args = {
  text: 'Bold text example.',
  className: 'font-bold',
};

export const ItalicText = Template.bind({});
ItalicText.args = {
  text: 'Italic text example.',
  className: 'italic',
};

export const TextWithChildren = Template.bind({});
TextWithChildren.args = {
  text: 'Text with children:',
  children: <span className="text-blue-500">Child element</span>,
  className: 'text-gray-800',
};

export const ColoredText = Template.bind({});
ColoredText.args = {
  text: 'Colored text example.',
  className: 'text-red-500',
};

export const LargeText = Template.bind({});
LargeText.args = {
  text: 'Large text example.',
  className: 'text-3xl',
};
