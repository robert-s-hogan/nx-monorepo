import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

const meta: Meta = {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    label: { control: 'text' },
    onChange: { action: 'onChange executed!' },
  },
};
export default meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Checkbox',
};

export const CustomLabel = Template.bind({});
CustomLabel.args = {
  label: 'Custom Label Checkbox',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: '',
};
