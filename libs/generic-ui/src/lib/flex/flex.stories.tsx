import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Flex } from './Flex'; // Adjust the import path as necessary
import { Button } from '../button/Button'; // Adjust the import path as necessary

export default {
  title: 'Layout/Flex',
  component: Flex,
} as Meta;

const Template: Story = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'justify-center items-center',
  children: <div>Default Flex</div>,
};

export const Row = Template.bind({});
Row.args = {
  className: 'flex-row justify-start items-center',
  children: (
    <>
      <Button text="Button 1" theme="primary" />
      <Button text="Button 2" theme="secondary" />
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  className: 'flex-col space-y-4',
  children: (
    <>
      <Button text="Button 1" theme="primary" />
      <Button text="Button 2" theme="secondary" />
    </>
  ),
};
