import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps } from './tooltip';
import InfoIcon from './info-icon';

const meta: Meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    icon: {
      control: 'text',
      description: 'React.ReactNode',
    },
    tooltipText: {
      control: 'text',
      description: 'string',
    },
    children: {
      control: 'text',
      description: 'React.ReactNode',
    },
    iconClassName: {
      control: 'text',
      description: 'string',
    },
    iconStyle: {
      control: 'object',
      description: 'React.CSSProperties',
    },
    className: {
      control: 'text',
      description: 'string',
    },
    style: {
      control: 'object',
      description: 'React.CSSProperties',
    },
  },
};

export default meta;

const Template: Story<TooltipProps> = (args) => (
  <div className="relative">
    <Tooltip {...args} />
    <div className="mt-4">(Hover me!)</div>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  icon: <InfoIcon className="text-primary" />,
  tooltipText: 'Primary Tooltip',
  className: 'text-white rounded',
  bgClassName: 'bg-primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: <InfoIcon className="text-secondary" />,
  tooltipText: 'Secondary Tooltip',
  className: 'text-white rounded',
  bgClassName: 'bg-secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  icon: <InfoIcon className="text-tertiary" />,
  tooltipText: 'Tertiary Tooltip',
  className: 'text-white rounded',
  bgClassName: 'bg-tertiary',
};

export const Error = Template.bind({});
Error.args = {
  icon: <InfoIcon className="text-error" />,
  tooltipText: 'Error Tooltip',
  className: 'text-white rounded',
  bgClassName: 'bg-error',
};

export const Success = Template.bind({});
Success.args = {
  icon: <InfoIcon className="text-success" />,
  tooltipText: 'Success Tooltip',
  className: 'text-white rounded',
  bgClassName: 'bg-success',
};

export const Warning = Template.bind({});
Warning.args = {
  icon: <InfoIcon className="text-warning" />,
  tooltipText: 'Warning Tooltip',
  className: 'text-black rounded',
  bgClassName: 'bg-warning',
};

export const Disabled = Template.bind({});
Disabled.args = {
  icon: <InfoIcon className="text-disabled no-cursor" />,
  tooltipText: 'Disabled Tooltip',
  className: 'text-white rounded',
  bgClassName: 'bg-disabled',
};
