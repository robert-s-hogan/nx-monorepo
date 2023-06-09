import { Meta, Story } from '@storybook/react';
import { Subheading, SubheadingProps } from './subheading';

export default {
  title: 'Atoms/Subheading',
  component: Subheading,
} as Meta;

const Template: Story<SubheadingProps> = (args) => <Subheading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Test Subheading',
};
