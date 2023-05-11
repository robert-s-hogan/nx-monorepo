// activity.stories.tsx
import { Story, Meta } from '@storybook/react/types-6-0';
import Activity, { ActivityIconProps } from './activity';

export default {
  title: 'Icons/Activity',
  component: Activity,
} as Meta;

const Template: Story<ActivityIconProps> = (args) => <Activity {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: 'text-blue-500', // example Tailwind CSS class for styling
};
