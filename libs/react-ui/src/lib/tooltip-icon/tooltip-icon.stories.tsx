import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TooltipIcon, TooltipIconProps } from './tooltip-icon';
import { FaInfoCircle } from 'react-icons/fa';

const meta: Meta = {
  component: TooltipIcon,
  title: 'TooltipIcon',
};
export default meta;

const Template: Story<TooltipIconProps> = (args) => <TooltipIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <FaInfoCircle />,
  tooltipText: 'Sample Tooltip Text',
  iconClassName: '',
  iconStyle: {},
  textProps: {
    position: 'top',
    maxWidth: '200px',
  },
  className: '',
  style: {},
};
