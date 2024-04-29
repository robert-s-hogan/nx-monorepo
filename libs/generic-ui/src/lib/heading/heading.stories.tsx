import React from 'react';
import { Story, Meta } from '@storybook/react';

import Heading, { HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 1,
  text: 'Heading 1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 2,
  text: 'Heading 2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  level: 3,
  text: 'Heading 3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  level: 4,
  text: 'Heading 4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  level: 5,
  text: 'Heading 5',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  level: 6,
  text: 'Heading 6',
};
