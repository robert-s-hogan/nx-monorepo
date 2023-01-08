import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Seo } from './seo';

const Story: ComponentMeta<typeof Seo> = {
  component: Seo,
  title: 'Seo',
};
export default Story;

const Template: ComponentStory<typeof Seo> = (args) => <Seo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  description: '',
  faviconPath: '',
};
