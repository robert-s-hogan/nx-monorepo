// Modal.stories.tsx

import { Meta, Story } from '@storybook/react';
import { Modal, ModalProps } from './modal';

const meta: Meta = {
  component: Modal,
  title: 'Atoms/Modal',
  argTypes: {
    isShowing: {
      control: 'boolean',
      description: 'boolean',
      defaultValue: false,
    },
    toggle: {
      action: 'toggled',
      description: 'function',
    },
    title: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    description: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    icon: {
      control: 'text',
      description: 'React.ReactNode',
      defaultValue: '',
    },
    children: {
      control: 'text',
      description: 'React.ReactNode',
      defaultValue: '',
    },
    onClick: {
      action: 'clicked',
      description: 'function',
    },
    buttonLocation: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'string: "left" | "right"',
      defaultValue: 'right',
    },
  },
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
