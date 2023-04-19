import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex, FlexProps } from './flex';

const meta: Meta = {
  component: Flex,
  title: 'Flex',
  argTypes: {
    id: { control: 'text' },
    className: { control: 'text' },
    role: { control: 'text' },
    onClick: { action: 'onClick executed!' },
  },
};
export default meta;

const Template: Story<FlexProps> = (args) => (
  <Flex {...args}>
    <div style={{ backgroundColor: '#fbbf24', padding: '1rem' }}>Item 1</div>
    <div style={{ backgroundColor: '#93c5fd', padding: '1rem' }}>Item 2</div>
    <div style={{ backgroundColor: '#a78bfa', padding: '1rem' }}>Item 3</div>
  </Flex>
);

export const Primary = Template.bind({});
Primary.args = {
  className: '',
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  className: 'justify-center items-center',
};

export const WithRoleAndId = Template.bind({});
WithRoleAndId.args = {
  className: '',
  role: 'list',
  id: 'example-flex',
};
