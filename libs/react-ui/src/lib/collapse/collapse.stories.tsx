//libs/react-ui/src/lib/collapse.stories.tsx
import { Meta, Story } from '@storybook/react';
import Collapse, { CollapseProps } from './collapse';

const meta: Meta = {
  component: Collapse,
  title: 'Components/Collapse',
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text for the collapse button',
      defaultValue: 'Collapse',
    },
    className: {
      control: 'text',
      description: 'Tailwind CSS classes to apply',
      defaultValue: 'border border-gray-300 rounded shadow',
    },
    children: {
      control: 'text',
      description: 'Content of the collapsible area',
      defaultValue: 'This is some collapsible content.',
    },
  },
};

export default meta;

const Template: Story<CollapseProps> = (args) => <Collapse {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Click to Open',
  className: 'border border-gray-300 rounded shadow',
  children: 'This is some collapsible content.',
};
