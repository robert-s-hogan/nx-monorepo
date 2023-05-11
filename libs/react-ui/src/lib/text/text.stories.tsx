import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from './text';

const meta: Meta = {
  component: Text,
  title: 'Text',
  title: 'Atoms/Text',
};
export default meta;

const Template: Story<TextProps> = (args) => <Text {...args}>Sample Text</Text>;

export const Primary = Template.bind({});
Primary.args = {
  className: '',
  id: '',
  style: {},
  onClick: undefined,
  'aria-label': '',
  loading: false,
  loadingRows: 1,
};
