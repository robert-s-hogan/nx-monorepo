import { Meta, Story } from '@storybook/react';
import { Toast, ToastProps } from './toast';

export default {
  title: 'Atoms/Toast',
  component: Toast,
} as Meta;

const Template: Story<ToastProps> = (args) => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success toast',
  type: 'success',
  isVisible: true,
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error toast',
  type: 'error',
  isVisible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning toast',
  type: 'warning',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This is a hidden toast',
  type: 'success',
  isVisible: false,
};
