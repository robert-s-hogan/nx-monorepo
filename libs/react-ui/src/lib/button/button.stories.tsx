import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { Flex, FlexProps } from '../flex/flex';

const meta: Meta = {
  component: Button,
  label: 'Button',
  title: 'Atoms/Button',
  argTypes: {
    label: {
      control: 'text',
      description: 'string (required)',
      defaultValue: '',
    },
    icon: {
      control: 'text',
      description: 'React.ReactNode',
      defaultValue: '',
    },
    onClick: {
      action: 'clicked',
      description: 'function',
      defaultValue: '',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'string: "button" | "submit" | "reset"',
      defaultValue: 'button',
    },
    className: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'boolean',
      defaultValue: false,
    },
    style: {
      control: 'object',
      description: 'React.CSSProperties',
      defaultValue: '',
    },
    label: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    'aria-label': {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    loading: {
      control: 'boolean',
      description: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const FlexTemplate: Story<FlexProps & ButtonProps> = (args) => (
  <Flex className={args.className}>
    <Button
      label={args.label}
      className={args.buttonClassName}
      onClick={args.onClick}
    />
  </Flex>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  className: 'bg-blue-500 text-white px-4 py-2 rounded',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  className: 'bg-gray-300 text-black px-4 py-2 rounded',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Button with Icon',
  icon: (
    <span role="img" aria-label="rocket" className="mr-2">
      🚀
    </span>
  ),
  className: 'bg-green-500 text-white px-4 py-2 items-centerrounded',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  className: 'bg-gray-300 text-white px-4 py-2 rounded',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading Button',
  className:
    'bg-purple-500 text-white px-4 py-2 rounded items-center space-x-4',
  loading: true,
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Warning Button',
  className: 'bg-yellow-500 text-black px-4 py-2 rounded',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error Button',
  className: 'bg-red-500 text-white px-4 py-2 rounded',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  label: 'Full Width Button',
  className: 'bg-blue-500 text-white px-4 py-2 rounded w-full',
};

export const RightAlignedButtonInsideFlex: Story<FlexProps & ButtonProps> =
  FlexTemplate.bind({});
RightAlignedButtonInsideFlex.args = {
  label: 'Right Aligned Button',
  buttonClassName: 'bg-pink-500 text-white px-4 py-2 rounded',
  className: 'justify-end w-full h-full',
  onClick: () => {},
};

export const CenterAlignedButtonInsideFlex: Story<FlexProps & ButtonProps> =
  FlexTemplate.bind({});
CenterAlignedButtonInsideFlex.args = {
  label: 'Center Aligned Button',
  buttonClassName: 'bg-gray-500 text-white px-4 py-2 rounded',
  className: 'justify-center w-full h-full',
  onClick: () => {},
};
