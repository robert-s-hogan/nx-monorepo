import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text/Overview',
  component: Text,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'This story provides an overview of various text styles and compositions, showcasing simple text and nested content.',
      },
    },
  },
} as Meta<typeof Text>;

const TextWithCode = ({ children, className, text }: TextProps) => (
  <div className="flex flex-col items-start space-y-4 p-4">
    <Text className={className} text={text}>
      {children}
    </Text>
    <pre className="text-xs p-2 rounded shadow bg-gray-100">
      {`<Text\n ${
        className ? ` className="${className}"` : ''
      }\n  text="${text}"${
        children
          ? `\n  ${React.Children.map(children, (child) => `${child}`)}`
          : ''
      }
/>`}
    </pre>
  </div>
);

export const Overview: StoryObj<typeof Text> = {
  render: (args) => (
    <>
      <pre>
        <code>{`import { Text } from './Text';`}</code>
      </pre>
      <div className="grid grid-cols-4 gap-6 space-y-6">
        <TextWithCode text="Simple Text" className="text-gray-800" />
        <TextWithCode text="Styled Text" className="font-bold text-blue-500" />
      </div>
    </>
  ),
};
