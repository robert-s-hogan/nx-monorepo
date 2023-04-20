import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './icon';
import { FaCoffee } from 'react-icons/fa';

const meta: Meta = {
  component: Icon,
  title: 'Icon',
  title: 'Atoms/Icon',
};
export default meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <FaCoffee style={{ color: 'red', fontSize: '2em' }} />,
  className: 'my-icon-class',
};
