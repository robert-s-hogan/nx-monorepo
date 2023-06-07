import { Meta, Story } from '@storybook/react';
import { Space, SpaceProps } from './space';

export default {
  title: 'Atoms/Space',
  component: Space,
} as Meta;

const Template: Story<SpaceProps> = (args) => <Space {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '4',
};
