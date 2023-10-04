import { Meta, Story } from '@storybook/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Stepper, StepperProps } from './stepper';

const meta: Meta = {
  component: Stepper,
  title: 'Stepper',
  title: 'Organisms/Stepper',
};
export default meta;

const Template: Story<StepperProps> = (args) => <Stepper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 1,
  onValueChange: (newValue: number) => {
    console.log('New Value:', newValue);
  },
  minusIcon: <FiMinus className="w-6 h-6" />,
  plusIcon: <FiPlus className="w-6 h-6" />,
  className: 'my-stepper',
};
