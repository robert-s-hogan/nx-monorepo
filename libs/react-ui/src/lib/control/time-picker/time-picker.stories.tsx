// time-picker.stories.tsx
import { Meta, Story } from '@storybook/react';
import { TimePicker, TimePickerProps } from './time-picker';

const meta: Meta = {
  title: 'Atoms/TimePicker',
  component: TimePicker,
};

export default meta;

const Template: Story<TimePickerProps> = (args) => <TimePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onTimeChange: (hour, minute) =>
    alert(
      `You selected ${hour.toString().padStart(2, '0')}:${minute
        .toString()
        .padStart(2, '0')}`
    ),
};
