import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Links, LinksProps } from './links';

const meta: Meta = {
  component: Links,
  title: 'Links',
  title: 'Atoms/Links',
};
export default meta;

const Template: Story<LinksProps> = (args) => <Links {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' },
  ],
};
