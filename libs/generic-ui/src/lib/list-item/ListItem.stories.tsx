import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ListItem, ListItemProps } from './ListItem';

export default {
  title: 'Components/ListItem',
  component: ListItem,
} as Meta;

const Template: Story<ListItemProps> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'List Item Text',
  onClick: () => alert('List item clicked!'),
  className: 'p-4 border-b border-gray-200 cursor-pointer',
  style: { color: 'blue' },
};
