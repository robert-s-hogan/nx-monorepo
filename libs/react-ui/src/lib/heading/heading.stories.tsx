import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Heading, HeadingProps } from './heading';

const meta: Meta = {
  component: Heading,
  title: 'Heading',
  title: 'Atoms/Heading',
};
export default meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  level: 1,
  children: 'Heading Text',
  className: 'my-heading-class',
  id: 'my-heading-id',
  'aria-labelledby': 'my-labelling-element-id',
  tabIndex: 1,
};
