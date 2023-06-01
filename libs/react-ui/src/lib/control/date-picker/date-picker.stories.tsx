//libs/react-ui/src/lib/control/date-picker/date-picker.stories.tsx
import { Meta, Story } from '@storybook/react';
import { DatePicker, DatePickerProps } from './date-picker';

const meta: Meta = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
};

export default meta;

const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onDateChange: (date) => alert(`You selected ${date.toLocaleDateString()}`),
};
