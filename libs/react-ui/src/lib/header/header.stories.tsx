import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Header, HeaderProps } from './header';

const meta: Meta = {
  component: Header,
  title: 'Header',
};
export default meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Your Website',
  logo: <img src="https://via.placeholder.com/50" alt="logo" />,
  nav: (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  ),
};
