import { Meta, Story } from '@storybook/react';
import { Quote, QuoteProps } from './quote';

export default {
  title: 'Atoms/Quote',
  component: Quote,
} as Meta;

const Template: Story<QuoteProps> = (args) => <Quote {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Test Quote',
  author: 'Author',
};
