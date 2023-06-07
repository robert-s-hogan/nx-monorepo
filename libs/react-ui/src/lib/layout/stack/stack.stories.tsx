import { Meta, Story } from '@storybook/react';
import { Stack, StackProps } from './stack';

export default {
  title: 'Atoms/Stack',
  component: Stack,
} as Meta;

const Template: Story<StackProps> = (args) => (
  <Stack {...args}>
    <div>Child 1</div>
    <div>Child 2</div>
    <div>Child 3</div>
  </Stack>
);

export const Spaced = Template.bind({});
Spaced.args = {
  spacing: 4,
};
