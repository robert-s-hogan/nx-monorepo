import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps } from './footer';

const meta: Meta = {
  component: Footer,
  title: 'Organisms/Footer',
  argTypes: {
    className: {
      control: 'text',
      description: 'CSS class for the footer',
      defaultValue: 'bg-gray-800 text-white px-4 py-8',
    },
  },
};

export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'bg-blue-500 text-white px-4 py-8',
};

export const Secondary = Template.bind({});
Secondary.args = {
  className: 'bg-gray-800 text-white px-4 py-8',
};
