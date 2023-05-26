import { Meta, Story } from '@storybook/react';
import { Navbar, NavbarProps } from './navbar';

const meta: Meta = {
  component: Navbar,
  title: 'Navbar',
  title: 'Organisms/Navbar',
};
export default meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  links: [
    { href: '/', label: 'Home', type: 'link' },
    { href: '/about', label: 'About', type: 'link' },
    { href: '/contact', label: 'Contact', type: 'link' },
  ],
  logoText: 'MyNavbar',
  isOpen: true,
  showSearchBar: true,
  searchBarProps: {
    placeholder: 'Search...',
  },
};
