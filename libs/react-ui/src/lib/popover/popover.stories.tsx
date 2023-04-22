import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Popover, PopoverProps } from './popover';

const meta: Meta = {
  component: Popover,
  title: 'Popover',
  title: 'Molecules/Popover',
};
export default meta;

const Template: Story<PopoverProps> = (args) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  trigger: <button>Click me</button>,
  content: (
    <div
      style={{
        padding: '1rem',
        background: 'white',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      This is the popover content
    </div>
  ),
  className: '',
};
