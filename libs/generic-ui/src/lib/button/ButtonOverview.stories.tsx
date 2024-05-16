import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Flex } from '../flex/Flex';

export default {
  title: 'Components/Button/Overview',
  component: Button,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'This story provides an overview of all button styles with corresponding JSX code.',
      },
    },
  },
} as Meta<typeof Button>;

const ButtonWithCode = ({
  text,
  theme,
  className,
  size,
}: {
  text: string;
  theme: string;
  className: string;
  size?: 'sm' | 'md' | 'lg';
}) => (
  <Flex className="items-center space-x-12 p-4 rounded-lg">
    <Button
      text={text}
      theme={
        theme as
          | 'primary'
          | 'secondary'
          | 'tertiary'
          | 'danger'
          | 'warning'
          | 'success'
          | 'info'
          | 'disabled'
      }
      className={className}
    />
    <pre className="text-xs p-2 rounded shadow">
      {`<Button\n  text="${text}"\n  theme="${theme}" ${
        theme === 'disabled' ? '\n  disabled' : ''
      } ${size ? `\n  size="${size}"` : ''}\n/>`}
    </pre>
  </Flex>
);

export const Overview: StoryObj<typeof Button> = {
  render: (args) => (
    <div className="space-y-6">
      <pre>
        <code>{`import { Button } from '@with-nx/generic-ui';`}</code>
      </pre>
      <div className="grid grid-cols-4 gap-4">
        <ButtonWithCode
          {...args}
          text="Primary Button"
          theme="primary"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
        <ButtonWithCode
          {...args}
          text="Secondary Button"
          theme="secondary"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        />
        <ButtonWithCode
          {...args}
          text="Tertiary Button"
          theme="tertiary"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        />
        <ButtonWithCode
          {...args}
          text="Danger Button"
          theme="danger"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        />
        <ButtonWithCode
          {...args}
          text="Warning Button"
          theme="warning"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        />
        <ButtonWithCode
          {...args}
          text="Success Button"
          theme="success"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        />
        <ButtonWithCode
          {...args}
          text="Info Button"
          theme="info"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
        <div />
        <ButtonWithCode
          {...args}
          text="Disabled Button"
          theme="disabled"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed"
        />
        <div />
        <div />
        <div />
        <ButtonWithCode
          {...args}
          text="Large Button"
          theme="success"
          size="lg"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg"
        />
        <ButtonWithCode
          {...args}
          text="Small Button"
          theme="danger"
          size="sm"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
        />
      </div>
    </div>
  ),
};
