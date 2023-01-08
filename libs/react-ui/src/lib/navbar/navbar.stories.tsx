import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from './navbar';

const Story: ComponentMeta<typeof Navbar> = {
  component: Navbar,
  title: 'Navbar',
};
export default Story;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  classes: '',
};
