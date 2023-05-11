import { Meta, Story } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from './breadcrumbs';

const meta: Meta = {
  component: Breadcrumb,
  title: 'Molecules/Breadcrumb',
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
