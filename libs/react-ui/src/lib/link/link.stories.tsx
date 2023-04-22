import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from './link';

const meta: Meta = {
  component: Link,
  title: 'Link',
  title: 'Atoms/Link',
};
export default meta;

const Template: Story<LinkProps> = (args) => (
  <Link {...args}>Example Link</Link>
);

export const Primary = Template.bind({});
Primary.args = {
  href: 'https://example.com',
  children: 'Example Link',
  className: 'link-class',
  target: '_blank',
  rel: 'noopener noreferrer',
};
