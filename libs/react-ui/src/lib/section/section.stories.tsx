//libs/react-ui/src/lib/section/section.stories.tsx

import { Meta, Story } from '@storybook/react';
import { SectionProps } from '@with-nx/types';
import { Heading } from '@with-nx/generic-ui';
import { Section } from './section';

export default {
  title: 'Atoms/Section',
  component: Section,
  argTypes: {
    id: { control: 'text' },
    className: { control: 'text' },
    style: { control: 'object' },
    ariaLabel: { control: 'text' },
  },
} as Meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'default-section',
  className:
    'max-w-7xl container mx-auto px-4 py-16 bg-blue-500 text-white text-3xl',
  ariaLabel: 'Default Section',
  children: <p>Section with .container, .mx-auto, and .max-w-7xl</p>,
};

export const FullWidthSection = Template.bind({});
FullWidthSection.args = {
  id: 'full-width-section',
  className:
    'max-w-full container mx-auto lg:mx-auto px-4 py-16 bg-blue-500 text-white text-3xl',
  ariaLabel: 'Full Width Section',
  children: (
    <Heading
      level={1}
      text="This is a full width section. These classes overwrite the global.css.section classes"
    />
  ),
};
