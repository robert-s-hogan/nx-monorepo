import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps } from './accordion';

export default {
  title: 'Atoms/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Accordion {...args}>Accordion Content</Accordion>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Accordion Title',
};
