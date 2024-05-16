import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListProps } from './list';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
    },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ],
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  items: [
    { id: '1', text: 'Item 1', href: 'https://example.com' },
    { id: '2', text: 'Item 2', href: 'https://example.com' },
    { id: '3', text: 'Item 3', href: 'https://example.com' },
  ],
};
