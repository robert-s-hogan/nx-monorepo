import { Meta, Story } from '@storybook/react';
import { Radio, RadioProps } from './radio';

const meta: Meta = {
  component: Radio,
  title: 'Radio',
  title: 'Atoms/Radio',
};
export default meta;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Option 1',
  name: 'exampleRadioGroup',
  value: 'option1',
  checked: false,
  onChange: (value) => console.log(`Radio button selected: ${value}`),
};
