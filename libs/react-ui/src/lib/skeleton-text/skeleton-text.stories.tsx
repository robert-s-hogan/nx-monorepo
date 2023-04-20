import React from 'react';
import { Meta, Story } from '@storybook/react';
import SkeletonText, { SkeletonTextProps } from './skeleton-text';

const meta: Meta = {
  component: SkeletonText,
  title: 'SkeletonText',
  title: 'Atoms/SkeletonText',
};
export default meta;

const Template: Story<SkeletonTextProps> = (args) => <SkeletonText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rows: 1,
};

export const MultipleRows = Template.bind({});
MultipleRows.args = {
  rows: 3,
};
