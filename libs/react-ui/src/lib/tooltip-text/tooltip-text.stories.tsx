import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TooltipText, TooltipTextProps } from './tooltip-text';

const meta: Meta = {
  component: TooltipText,
  title: 'TooltipText',
  title: 'Atoms/TooltipText',
};
export default meta;

const Template: Story<TooltipTextProps> = (args) => <TooltipText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Sample Tooltip Text',
  className: '',
  style: {},
};
