import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading/Overview',
  component: Heading,
  parameters: {
    controls: { hideNoControlsWarning: true },
    docs: {
      description: {
        component:
          'This story provides an overview of all heading levels with corresponding JSX code for each.',
      },
    },
  },
} as Meta<typeof Heading>;

const HeadingWithCode = ({ level, text, className }: HeadingProps) => (
  <div className="flex flex-col items-start space-y-4 p-4">
    <Heading level={level} text={text} className={className} />
    <pre className="text-xs p-2 rounded shadow bg-gray-100">
      {`<Heading\n  level={${level}}\n  text="${text}"\n />`}
    </pre>
  </div>
);

export const Overview: StoryObj<typeof Heading> = {
  render: (args) => (
    <div className="space-y-6">
      <pre>
        <code>{`import { Heading } from '@with-nx/generic-ui';`}</code>
      </pre>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <HeadingWithCode
            {...args}
            text={`Heading Level ${level}`}
            level={level as 1 | 2 | 3 | 4 | 5 | 6}
            className="text-gray-800"
          />
        ))}
      </div>
    </div>
  ),
};
