import { Meta, Story } from '@storybook/react';
import { AutoComplete, AutoCompleteProps } from './autoComplete';

export default {
  title: 'Atoms/AutoComplete',
  component: AutoComplete,
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  suggestions: ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'],
  onChange: (value) => alert(`Input changed to: ${value}`),
};
