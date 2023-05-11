import type { Meta, Story } from '@storybook/react';
import { NavbarMenu, NavbarMenuProps } from './navbar-menu';

const meta: Meta = {
  component: NavbarMenu,
  title: 'NavbarMenu',
  title: 'Organisms/NavbarMenu',
};
export default meta;

const Template: Story<NavbarMenuProps> = (args) => <NavbarMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    {
      type: 'link',
      href: '/',
      label: 'Home',
      children: 'Home',
    },
    {
      type: 'link',
      href: '/about',
      label: 'About',
      children: 'About',
    },
    {
      type: 'link',
      href: '/contact',
      label: 'Contact',
      children: 'Contact',
    },
    {
      type: 'button',
      onClick: () => {
        alert('Button clicked!');
      },
      children: 'Button',
    },
  ],
};
