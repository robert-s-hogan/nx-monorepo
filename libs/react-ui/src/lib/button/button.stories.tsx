import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';

const meta: Meta = {
  component: Button,
  title: 'Button',
  argTypes: {
    children: { control: 'text' },
    icon: { control: 'text' },
    onClick: { action: 'clicked' },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'select' },
    },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    style: { control: 'object' },
    title: { control: 'text' },
    'aria-label': { control: 'text' },
    loading: { control: 'boolean' },
  },
};
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  className: 'bg-blue-500 text-white px-4 py-2 rounded',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  className: 'bg-gray-300 text-black px-4 py-2 rounded',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button with Icon',
  icon: (
    <span role="img" aria-label="rocket">
      🚀
    </span>
  ),
  className: 'bg-green-500 text-white px-4 py-2 rounded',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  className: 'bg-blue-500 text-white px-4 py-2 rounded',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading Button',
  className: 'bg-purple-500 text-white px-4 py-2 rounded',
  loading: true,
};
