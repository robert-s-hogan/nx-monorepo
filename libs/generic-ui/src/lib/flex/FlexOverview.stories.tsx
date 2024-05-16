import React from 'react';
import { Meta } from '@storybook/react';
import { Flex } from './Flex'; // Adjust the import path as necessary
import { Button } from '../button/Button'; // Adjust the import path as necessary
import { Heading } from '../heading/Heading'; // Adjust the import path as necessary

export default {
  title: 'Layout/Flex/Overview',
  component: Flex,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'This story provides an overview of the Flex component with corresponding JSX code for each.',
      },
    },
  },
} as Meta;

const ColumnLayout = ({ children }: { children: React.ReactNode }) => (
  <Flex className="flex-col space-y-4 p-4">{children}</Flex>
);

const RowLayout = ({ children }: { children: React.ReactNode }) => (
  <Flex className="flex-row space-x-4 p-4">{children}</Flex>
);

const CenteredLayout = ({ children }: { children: React.ReactNode }) => (
  <Flex className="flex-row justify-center items-center p-4">{children}</Flex>
);

const SpaceBetweenLayout = ({ children }: { children: React.ReactNode }) => (
  <Flex className="flex-row justify-between items-center p-4">{children}</Flex>
);

const SpaceAroundLayout = ({ children }: { children: React.ReactNode }) => (
  <Flex className="flex-row justify-around items-center p-4">{children}</Flex>
);

export const Overview = () => {
  return (
    <div className="space-y-6">
      <pre>
        <code>{`import { Flex } from '@with-nx/generic-ui';`}</code>
      </pre>
      <ColumnLayout>
        <Heading level={2} text="Column Layout" />
        <RowLayout>
          <Button text="Button 1" theme="primary" />
          <Button text="Button 2" theme="danger" />
          <Button text="Button 3" theme="warning" />
        </RowLayout>
      </ColumnLayout>
      <ColumnLayout>
        <Heading level={2} text="Row Layout" />
        <RowLayout>
          <Button text="Button 1" theme="primary" />
          <Button text="Button 2" theme="danger" />
          <Button text="Button 3" theme="warning" />
        </RowLayout>
      </ColumnLayout>
      <ColumnLayout>
        <Heading level={2} text="Centered Layout" />
        <CenteredLayout>
          <Button text="Button 1" theme="primary" />
          <Button text="Button 2" theme="danger" />
          <Button text="Button 3" theme="warning" />
        </CenteredLayout>
      </ColumnLayout>
      <ColumnLayout>
        <Heading level={2} text="Space Between Layout" />
        <SpaceBetweenLayout>
          <Button text="Button 1" theme="primary" />
          <Button text="Button 2" theme="danger" />
          <Button text="Button 3" theme="warning" />
        </SpaceBetweenLayout>
      </ColumnLayout>
      <ColumnLayout>
        <Heading level={2} text="Space Around Layout" />
        <SpaceAroundLayout>
          <Button text="Button 1" theme="primary" />
          <Button text="Button 2" theme="danger" />
          <Button text="Button 3" theme="warning" />
        </SpaceAroundLayout>
      </ColumnLayout>
    </div>
  );
};
