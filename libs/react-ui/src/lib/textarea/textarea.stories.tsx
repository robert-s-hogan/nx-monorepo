import { Meta, Story } from '@storybook/react';
import { Textarea, TextareaProps } from './textarea';

const meta: Meta = {
  component: Textarea,
  title: 'Atoms/Textarea',
  argTypes: {
    label: {
      control: 'text',
      description: 'string (required)',
      defaultValue: 'Label',
    },
    name: {
      control: 'text',
      description: 'string',
      defaultValue: 'textarea',
    },
    id: {
      control: 'text',
      description: 'string',
      defaultValue: 'textarea',
    },
    placeholder: {
      control: 'text',
      description: 'string',
      defaultValue: 'Enter text here...',
    },
    required: {
      control: 'boolean',
      description: 'boolean',
      defaultValue: false,
    },
    className: {
      control: 'text',
      description: 'string',
      defaultValue: '',
    },
    style: {
      control: 'object',
      description: 'React.CSSProperties',
      defaultValue: {},
    },
    cols: {
      control: 'number',
      description: 'number',
      defaultValue: 30,
    },
    rows: {
      control: 'number',
      description: 'number',
      defaultValue: 5,
    },
    minLength: {
      control: 'number',
      description: 'number',
      defaultValue: 10,
    },
    maxLength: {
      control: 'number',
      description: 'number',
      defaultValue: 100,
    },
  },
};

export default meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Textarea',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Textarea With Placeholder',
  placeholder: 'Enter your text here...',
};

export const Required = Template.bind({});
Required.args = {
  label: 'Required Textarea',
  required: true,
};

export const WithCharacterLimit = Template.bind({});
WithCharacterLimit.args = {
  label: 'Textarea With Character Limit',
  minLength: 10,
  maxLength: 100,
};
