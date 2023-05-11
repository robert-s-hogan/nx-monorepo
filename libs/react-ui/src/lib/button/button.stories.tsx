import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './button';
import { Flex, FlexProps } from '../flex/flex';

const meta: Meta = {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    children: {
      control: 'text',
      description: 'string (required)',
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
  <Flex className={args.flexClassName}>
    <Button className={args.className} onClick={args.onClick}>
      {args.children}
    </Button>
  </Flex>
);

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
    <span role="img" className="mr-2">
      🚀
    </span>
  ),
  className: 'bg-green-500 text-white px-4 py-2 items-centerrounded',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  className: 'bg-gray-300 text-white px-4 py-2 rounded',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Loading Button',
  className:
    'bg-purple-500 text-white px-4 py-2 rounded items-center space-x-4',
  loading: true,
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning Button',
  className: 'bg-yellow-500 text-black px-4 py-2 rounded',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Button',
  className: 'bg-red-500 text-white px-4 py-2 rounded',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Full Width Button',
  className: 'bg-blue-500 text-white px-4 py-2 rounded w-full',
};

export const RightAlignedButtonInsideFlex: Story<FlexProps & ButtonProps> =
  FlexTemplate.bind({});
RightAlignedButtonInsideFlex.args = {
  children: 'Right Aligned Button',
  flexClassName: 'justify-end w-full h-full',
  className: 'bg-pink-500 text-white px-4 py-2 rounded w-auto',
  onClick: () => {},
};

export const CenterAlignedButtonInsideFlex: Story<FlexProps & ButtonProps> =
  FlexTemplate.bind({});
CenterAlignedButtonInsideFlex.args = {
  children: 'Center Aligned Button',
  flexClassName: 'justify-center w-full h-full',
  className: 'bg-gray-500 text-white px-4 py-2 rounded w-auto',
  onClick: () => {},
};
