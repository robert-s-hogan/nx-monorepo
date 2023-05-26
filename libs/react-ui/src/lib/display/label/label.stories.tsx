import { Meta, Story } from '@storybook/react';
import { Label, LabelProps } from '../label/label';

const meta: Meta = {
  component: Label,
  title: 'Atoms/Label',
  argTypes: {
    children: {
      control: 'text',
      description: 'string (required)',
      defaultValue: 'Label',
    },
    htmlFor: {
      control: 'text',
      description: 'string',
      defaultValue: 'input',
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
  },
};

export default meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Label',
};

export const WithStyle = Template.bind({});
WithStyle.args = {
  children: 'Styled Label',
  style: { color: 'red', fontWeight: 'bold' },
};
