import { Meta, Story } from '@storybook/react';
import { Steps, StepsProps } from './steps';

export default {
  title: 'Atoms/Steps',
  component: Steps,
} as Meta;

const Template: Story<StepsProps> = (args) => <Steps {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  currentStep: 1,
  steps: ['Step 1', 'Step 2', 'Step 3'],
};
