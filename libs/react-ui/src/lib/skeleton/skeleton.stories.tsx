import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Skeleton, SkeletonProps } from './skeleton';

const meta: Meta = {
  component: Skeleton,
  title: 'Skeleton',
  title: 'Atoms/Skeleton',
};
export default meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  width: '100%',
  height: '100%',
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 200,
  height: 50,
};
