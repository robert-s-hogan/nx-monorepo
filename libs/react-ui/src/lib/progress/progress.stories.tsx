import { Meta, Story } from '@storybook/react';
import { Progress, ProgressProps } from './progress';

const meta: Meta = {
  component: Progress,
  title: 'Progress',
  title: 'Atoms/Progress',
};
export default meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Horizontal = Template.bind({});
Horizontal.args = {
  value: 50,
  maxValue: 100,
  type: 'horizontal',
};

export const Circular = Template.bind({});
Circular.args = {
  value: 50,
  maxValue: 100,
  type: 'circular',
};
