import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from './footer';

const meta: Meta = {
  component: Footer,
  title: 'Footer',
  title: 'Organisms/Footer',
  argTypes: {
    className: { control: 'text' },
  },
};
export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'bg-gray-200 p-4',
};
