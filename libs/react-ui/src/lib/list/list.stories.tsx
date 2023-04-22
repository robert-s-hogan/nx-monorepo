import React from 'react';
import { Meta, Story } from '@storybook/react';
import { List, ListProps } from './list';

const meta: Meta = {
  component: List,
  title: 'List',
  title: 'Atoms/List',
};
export default meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
  ],
};
