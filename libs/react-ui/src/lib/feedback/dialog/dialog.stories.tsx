import { Meta, Story } from '@storybook/react';
import { Dialog, DialogProps } from './dialog';

export default {
  title: 'Atoms/Dialog',
  component: Dialog,
} as Meta;

const Template: Story<DialogProps> = (args) => <Dialog {...args} />;

export const Visible = Template.bind({});
Visible.args = {
  title: 'Visible Dialog',
  children: <p>This is a visible dialog</p>,
  isVisible: true,
  onClose: () => {},
};

export const Hidden = Template.bind({});
Hidden.args = {
  title: 'Hidden Dialog',
  children: <p>This is a hidden dialog</p>,
  isVisible: false,
  onClose: () => {},
};
