import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tabs, TabsProps } from './tabs';

const data = [
  {
    label: 'Tab 1',
    content: 'Content for Tab 1',
  },
  {
    label: 'Tab 2',
    content: 'Content for Tab 2',
  },
  {
    label: 'Tab 3',
    content: 'Content for Tab 3',
  },
];

const meta: Meta = {
  component: Tabs,
  title: 'Tabs',
  title: 'Atoms/Tabs',
};
export default meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: data,
};
