import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List } from './list';

export default {
  title: 'Example/ListOverview',
  component: List,
} as Meta;

const Template: Story = (args) => (
  <div>
    <List {...args} items={[]} />
  </div>
);

export const Overview = Template.bind({});
Overview.args = {
  items: [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2', href: 'https://example.com' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4', href: 'https://example.com' },
  ],
};
