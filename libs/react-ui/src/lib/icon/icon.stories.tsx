// stories/Icon.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FaCoffee } from 'react-icons/fa';
import Icon, { IconProps } from '../src/components/Icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const CoffeeIcon = Template.bind({});
CoffeeIcon.args = {
  icon: <FaCoffee style={{ color: 'red', fontSize: '2em' }} />,
  className: 'my-icon-class',
};
