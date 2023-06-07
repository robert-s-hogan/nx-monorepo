import { Meta, Story } from '@storybook/react';
import { Sidebar, SidebarProps } from './sidebar';

export default {
  title: 'Atoms/Sidebar',
  component: Sidebar,
} as Meta;

const Template: Story<SidebarProps> = (args) => (
  <Sidebar {...args}>
    <div>Sidebar Content</div>
  </Sidebar>
);

export const Default = Template.bind({});
Default.args = {
  width: '64',
};
