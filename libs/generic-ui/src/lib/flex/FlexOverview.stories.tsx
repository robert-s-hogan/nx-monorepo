import React from 'react';
import { Meta } from '@storybook/react';
import { Flex } from './Flex'; // Adjust the import path as necessary
import { Button } from '../button/Button'; // Adjust the import path as necessary
import { Heading } from '../heading/Heading'; // Adjust the import path as necessary

export default {
  title: 'Layout/Flex/Overview',
  component: Flex,
} as Meta;

export const Overview = () => {
  return (
    <Flex className="flex-col space-y-4">
      <Heading level={2} text="Flex Layout Overview" />
      <Flex className="flex-row justify-between items-center">
        <Button text="Button 1" theme="primary" />
        <Button text="Button 2" theme="success" />
        <Button text="Button 3" theme="danger" />
      </Flex>
      <Flex className="flex-row justify-around items-center">
        <Button text="Button A" theme="info" />
        <Button text="Button B" theme="warning" />
      </Flex>
    </Flex>
  );
};
