import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Dropdown, DropdownProps } from './dropdown';

const meta: Meta = {
  component: Dropdown,
  title: 'Dropdown',
  argTypes: {
    options: { control: 'array' },
    value: { control: 'text' },
    onChange: { action: 'onChange executed!' },
    className: { control: 'text' },
  },
};
export default meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export const Primary = Template.bind({});
Primary.args = {
  options: options,
  value: '1',
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  options: options,
  value: '1',
  className: 'border-blue-500 text-blue-500',
};

export const FewerOptions = Template.bind({});
FewerOptions.args = {
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  value: '1',
};
