import { Meta, Story } from '@storybook/react';
import { Divider, DividerProps } from './divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
} as Meta;

const Template: Story<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'gray-200',
};
