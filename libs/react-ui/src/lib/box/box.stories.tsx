import { Meta, Story } from '@storybook/react';
import { Box, BoxProps } from './box';

const meta: Meta = {
  component: Box,
  title: 'Atoms/Box',
  argTypes: {
    children: {
      control: 'text',
      description: 'React.ReactNode',
      defaultValue: '',
    },
    id: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    className: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    role: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    style: {
      control: 'object',
      description: 'React.CSSProperties',
      defaultValue: '',
    },
    onClick: {
      action: 'clicked',
      description: 'React.MouseEventHandler<HTMLDivElement>',
    },
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

export const WithRole = Template.bind({});
WithRole.args = {
  children: 'Box with Role',
  role: 'presentation',
  className: 'bg-green-500 text-white p-4 rounded',
};

export const WithId = Template.bind({});
WithId.args = {
  id: 'customBoxId',
  children: 'Box with Id',
  className: 'bg-purple-500 text-white p-4 rounded',
};

export const WithOnClick = Template.bind({});
WithOnClick.args = {
  children: 'Clickable Box',
  className: 'bg-yellow-500 text-black p-4 rounded cursor-pointer',
  onClick: () => {},
};

export const WithStyle = Template.bind({});
WithStyle.args = {
  children: 'Styled Box',
  className: 'p-4 rounded',
  style: {
    backgroundColor: 'cyan',
    color: 'black',
  },
};
