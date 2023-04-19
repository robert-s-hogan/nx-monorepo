import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageIndicator, PageIndicatorProps } from './page-indicator';

const meta: Meta = {
  component: PageIndicator,
  title: 'PageIndicator',
};
export default meta;

const Template: Story<PageIndicatorProps> = (args) => (
  <PageIndicator {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  page: 2,
  total: 5,
  className: 'bg-blue-500',
};
