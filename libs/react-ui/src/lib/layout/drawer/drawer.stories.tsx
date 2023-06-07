import { Meta, Story } from '@storybook/react';
import { Drawer, DrawerProps } from './drawer';

export default {
  title: 'Atoms/Drawer',
  component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args}>
    <div>Drawer Content</div>
  </Drawer>
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
};
