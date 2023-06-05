import { Meta, Story } from '@storybook/react';
import { Table, TableProps } from './table';

export default {
  title: 'Atoms/Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    { Name: 'John', Age: 25, Location: 'New York' },
    { Name: 'Jane', Age: 24, Location: 'San Francisco' },
  ],
};
