import { Meta, Story } from '@storybook/react';
import { Select, SelectProps } from './select';

const meta: Meta = {
  component: Select,
  title: 'Select',
  title: 'Molecules/Select',
};
export default meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  onChange: (value: string) => {
    console.log('Selected value:', value);
  },
  value: 'option1',
};
