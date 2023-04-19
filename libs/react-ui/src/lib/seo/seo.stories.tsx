import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Seo, SeoProps } from './seo';

const meta: Meta = {
  component: Seo,
  title: 'Seo',
};
export default meta;

const Template: Story<SeoProps> = (args) => <Seo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Example Title',
  description: 'Example Description',
  faviconPath: '/path/to/favicon.png',
};
