// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: null, // This disables the default DocsPage but keeps the docs tab
      source: {
        type: 'code', // Ensure this is set so that Storybook knows to show source as code
        language: 'tsx',
        code: `<Button>Click me!</Button>`, // Example static code snippet
      },
    },
  },
} as Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  args: {
    text: 'Click me!',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  },
  parameters: {
    docs: {
      // This explicitly sets the code snippet to be shown
      source: {
        code: `<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me!</Button>`,
      },
    },
  },
};

// Secondary Button
export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: 'Secondary (*-secondary)',
    className:
      'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
    theme: 'secondary',
    text: 'Secondary',
  },
};

// Tertiary Button
export const Tertiary: StoryObj<typeof Button> = {
  args: {
    children: 'Tertiary (*-tertiary)',
    className:
      'bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded',
    theme: 'tertiary',
    text: 'Tertiary',
  },
};

// Danger Button
export const Danger: StoryObj<typeof Button> = {
  args: {
    children: 'Danger (*-danger)',
    className:
      'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
    theme: 'danger',
    text: 'Danger',
  },
};

// Warning Button
export const Warning: StoryObj<typeof Button> = {
  args: {
    children: 'Warning (*-warning)',
    className:
      'bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded',
    theme: 'warning',
    text: 'Warning',
  },
};

// Success Button
export const Success: StoryObj<typeof Button> = {
  args: {
    children: 'Success (*-success)',
    className:
      'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
    theme: 'success',
    text: 'Success',
  },
};

// Info Button
export const Info: StoryObj<typeof Button> = {
  args: {
    children: 'Info (*-info)',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    theme: 'info',
    text: 'Info',
  },
};

// Disabled Button
export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'Disabled (*-disabled)',
    className:
      'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed',
    theme: 'disabled',
    text: 'Disabled',
    disabled: true,
  },
};

// Large Button
export const Large: StoryObj<typeof Button> = {
  args: {
    children: 'Large Button (*-lg)',
    className:
      'bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg',
    text: 'Large Button (*-lg)',
    size: 'lg',
  },
};

// Small Button
export const Small: StoryObj<typeof Button> = {
  args: {
    children: 'Small Button (*-sm)',
    className:
      'bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm',
    text: 'Small Button (*-sm)',
    size: 'sm',
  },
};
