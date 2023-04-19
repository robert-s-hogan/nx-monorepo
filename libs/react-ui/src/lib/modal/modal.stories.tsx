import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './modal';

const meta: Meta = {
  component: Modal,
  title: 'Modal',
};
export default meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isShowing: true,
  toggle: () => console.log('Toggled'),
  title: 'Sample Modal',
  description: 'This is a sample modal description.',
  children: <p>Additional content can go here.</p>,
};
