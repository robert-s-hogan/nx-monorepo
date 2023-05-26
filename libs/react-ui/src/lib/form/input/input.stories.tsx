import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './input';

const meta: Meta = {
  component: Input,
  title: 'Input',
  title: 'Atoms/Input',
};
export default meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Example Label',
  type: 'text',
  name: 'exampleInput',
  value: '',
  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log('Input value:', event.target.value),
  className: 'input-class',
  id: 'exampleInputId',
  onClick: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) =>
    console.log('Input clicked:', event),
  ariaLabel: 'Example Aria Label',
  required: false,
};
