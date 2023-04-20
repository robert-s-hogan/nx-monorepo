import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

const meta: Meta = {
  component: Badge,
  title: 'Atoms/Badge',
};
export default meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 5,
  variant: 'primary',
  max: 99,
};
