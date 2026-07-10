import { Meta, Story } from '@storybook/react';
import { Seo, SeoProps } from './seo';

const meta: Meta = {
  component: Seo,
  title: 'Seo',
  title: 'Organisms/Seo',
};
export default meta;

const Template: Story<SeoProps> = (args) => <Seo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Example Title',
  description: 'Example Description',
  url: 'https://example.com',
  faviconPath: '/path/to/favicon.png',
  image: '/path/to/og-image.png',
};
