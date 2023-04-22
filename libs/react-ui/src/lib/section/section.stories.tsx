import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Section, SectionProps } from './section';

const meta: Meta = {
  component: Section,
  title: 'Section',
  title: 'Atoms/Section',
};
export default meta;

const Template: Story<SectionProps> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'section-example',
  className: 'bg-gray-100 p-4',
  role: 'contentinfo',
  children: (
    <>
      <h2 className="text-lg font-bold mb-2">Section Title</h2>
      <p>
        This is an example of a section component. You can customize it using
        the provided props.
      </p>
    </>
  ),
};
