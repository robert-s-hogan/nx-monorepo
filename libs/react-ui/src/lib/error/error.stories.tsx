// /libs/react-ui/src/lib/error/error.stories.tsx

import { Meta, Story } from '@storybook/react';
import { Error, ErrorProps } from './error';

const meta: Meta = {
  component: Error,
  title: 'Atoms/Error',
  argTypes: {
    message: {
      control: 'text',
      description: 'string',
      defaultValue: 'An error occurred.',
    },
  },
};

export default meta;

const Template: Story<ErrorProps> = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  message: 'An unexpected error occurred.',
};
