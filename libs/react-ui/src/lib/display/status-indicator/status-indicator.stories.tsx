import { Meta, Story } from '@storybook/react';
import { StatusIndicator, StatusIndicatorProps } from './statusIndicator';

export default {
  title: 'Atoms/StatusIndicator',
  component: StatusIndicator,
} as Meta;

const Template: Story<StatusIndicatorProps> = (args) => (
  <StatusIndicator {...args} />
);

export const Online = Template.bind({});
Online.args = {
  status: 'online',
};

export const Offline = Template.bind({});
Offline.args = {
  status: 'offline',
};

export const Away = Template.bind({});
Away.args = {
  status: 'away',
};
