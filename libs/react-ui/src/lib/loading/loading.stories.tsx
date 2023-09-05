// Loading.stories.tsx

import { Meta, Story } from '@storybook/react';
import { Loading, LoadingProps } from './loading';

const meta: Meta = {
  component: Loading,
  title: 'Atoms/Loading',
  argTypes: {
    timeout: {
      control: 'number',
      description: 'duration in milliseconds',
      defaultValue: 3000,
    },
  },
};

export default meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  timeout: 3000,
};
