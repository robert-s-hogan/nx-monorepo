import { Meta, Story } from '@storybook/react';
import { ValidatedInput, ValidatedInputProps } from './validatedInput';

export default {
  title: 'Atoms/ValidatedInput',
  component: ValidatedInput,
} as Meta;

const Template: Story<ValidatedInputProps> = (args) => (
  <ValidatedInput {...args} />
);

export const Valid = Template.bind({});
Valid.args = {
  value: 'Valid input',
  onChange: (value) => alert(`Input changed to: ${value}`),
  isValid: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  value: 'Invalid input',
  onChange: (value) => alert(`Input changed to: ${value}`),
  feedback: 'This input is invalid',
  isValid: false,
};
