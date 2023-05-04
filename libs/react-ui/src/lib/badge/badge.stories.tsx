import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

const meta: Meta = {
  component: Badge,
  title: 'Atoms/Badge',
  argTypes: {
    value: {
      control: 'number',
      description: 'number (required)',
      defaultValue: 0,
    },
    max: {
      control: 'number',
      description: 'number',
      defaultValue: 99,
    },
    className: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
  },
};

export default meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 5,
  className: 'bg-blue-500',
  max: 99,
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 10,
  className: 'bg-gray-300',
  max: 99,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 15,
  className: 'bg-gray-300',
  max: 99,
};

export const Info = Template.bind({});
Info.args = {
  value: 12,
  className: 'bg-blue-700',
  max: 99,
};

export const Success = Template.bind({});
Success.args = {
  value: 8,
  className: 'bg-green-500',
  max: 99,
};

export const Warning = Template.bind({});
Warning.args = {
  value: 15,
  className: 'bg-yellow-500',
  max: 99,
};

export const Error = Template.bind({});
Error.args = {
  value: 20,
  className: 'bg-red-500',
  max: 99,
};

export const MaxValue = Template.bind({});
MaxValue.args = {
  value: 150,
  className: 'bg-blue-500',
  max: 99,
};

export const Outlined = Template.bind({});
Outlined.args = {
  value: 4,
  className: 'border border-blue-500 text-blue-500',
  max: 99,
};

export const ZeroValue = Template.bind({});
ZeroValue.args = {
  value: 0,
  className: 'bg-gray-500',
  max: 99,
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  value: 5,
  className: 'bg-gradient-to-r from-cyan-500 to-blue-500',
  max: 99,
};
