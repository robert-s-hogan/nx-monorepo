import { Meta, Story } from '@storybook/react';
import { Caption, CaptionProps } from './caption';

export default {
  title: 'Atoms/Caption',
  component: Caption,
} as Meta;

const Template: Story<CaptionProps> = (args) => <Caption {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Test Caption',
};
