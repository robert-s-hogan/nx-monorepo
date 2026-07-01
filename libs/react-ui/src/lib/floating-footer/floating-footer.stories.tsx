import { Meta, Story } from '@storybook/react';
import { FloatingFooter, FloatingFooterProps } from './floating-footer';

const meta: Meta = {
  component: FloatingFooter,
  title: 'Organisms/FloatingFooter',
};
export default meta;

const Template: Story<FloatingFooterProps> = (args) => (
  <FloatingFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  currentApp: 'play2winff',
};
