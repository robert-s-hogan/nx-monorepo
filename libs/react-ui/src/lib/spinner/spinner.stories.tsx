import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Spinner, SpinnerProps } from './spinner';

const meta: Meta = {
  component: Spinner,
  title: 'Atoms/Spinner',
};
export default meta;

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 'medium',
};
