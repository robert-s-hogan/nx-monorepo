import { Meta, Story } from '@storybook/react';
import { Snackbar, SnackbarProps } from './snackbar';

export default {
  title: 'Atoms/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success snackbar',
  type: 'success',
  isVisible: true,
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error snackbar',
  type: 'error',
  isVisible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning snackbar',
  type: 'warning',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This is a hidden snackbar',
  type: 'success',
  isVisible: false,
};
