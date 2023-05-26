import { Meta, Story } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';
import { BreadcrumbProps } from '@with-nx/types';

const meta: Meta = {
  component: Breadcrumb,
  title: 'Atoms/Breadcrumb',
  argTypes: {
    items: {
      control: 'object',
      description: 'Array<{title: string, path?: string}>',
      defaultValue: [],
    },
  },
};

export default meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  items: [
    { title: 'Home', path: '/' },
    { title: 'Category', path: '/category' },
    { title: 'Product' },
  ],
};

export const Secondary = Template.bind({});
Secondary.args = {
  items: [
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Reports', path: '/reports' },
    { title: 'Monthly' },
  ],
};

export const WithLongTitle = Template.bind({});
WithLongTitle.args = {
  items: [
    { title: 'Site', path: '/site' },
    { title: 'Subsite', path: '/subsite' },
    { title: 'Deeply Nested Page With a Long Title' },
  ],
};
