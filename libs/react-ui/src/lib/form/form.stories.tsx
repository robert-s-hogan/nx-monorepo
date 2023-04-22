import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from './form';

const meta: Meta = {
  component: Form,
  title: 'Form',
  title: 'Molecules/Form',
};
export default meta;

const Template: Story<FormProps> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      required: true,
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    },
  ],
  onSubmit: (values) => {
    console.log('Form submitted', values);
  },
};
