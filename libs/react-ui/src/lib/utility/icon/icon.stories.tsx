import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from './icon';

export default {
  title: 'Atoms/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Add = Template.bind({});
Add.args = {
  name: 'add',
};

export const Remove = Template.bind({});
Remove.args = {
  name: 'remove',
};
