import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from './box';

const meta: Meta = {
  component: Box,
  title: 'Box',
  argTypes: {
    id: { control: 'text' },
    children: { control: 'text' },
    className: { control: 'text' },
    role: { control: 'text' },
    onClick: { action: 'clicked' },
    style: { control: 'object' },
  },
};
export default meta;

const Template: Story<BoxProps> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Box',
  className: 'bg-blue-500 text-white p-4 rounded',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Box',
  className: 'bg-gray-300 text-black p-4 rounded',
};

export const WithCustomStyle = Template.bind({});
WithCustomStyle.args = {
  children: 'Styled Box',
  className: 'p-4 rounded',
  style: {
    backgroundColor: 'purple',
    color: 'white',
  },
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: 'Clickable Box',
  className: 'bg-green-500 text-white p-4 rounded cursor-pointer',
  role: 'button',
};
