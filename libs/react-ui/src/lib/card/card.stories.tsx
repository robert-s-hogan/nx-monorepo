import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './card';

const meta: Meta = {
  component: Card,
  title: 'Molecules/Card',
};
export default meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Example Card',
  description: 'This is an example of a Card component.',
  imageUrl: 'https://via.placeholder.com/150',
  imageAlt: 'Example Image',
};
