// Button.stories.tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowCurvedDownRight } from '@with-nx/icons';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};
export default meta;

// Primary Button
export const Primary: StoryObj<typeof Button> = {
  args: {
    children: 'Primary (*-primary)',
    className:
      'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  },
};

// Secondary Button
export const Secondary: StoryObj<typeof Button> = {
  args: {
    children: 'Secondary (*-secondary)',
    className:
      'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded',
  },
};

// Disabled Button
export const Disabled: StoryObj<typeof Button> = {
  args: {
    children: 'Disabled (*-disabled)',
    className:
      'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed',
    disabled: true,
  },
};

// Large Button
export const Large: StoryObj<typeof Button> = {
  args: {
    children: 'Large Button (*-lg)',
    className:
      'bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded text-lg',
  },
};

// Small Button
export const Small: StoryObj<typeof Button> = {
  args: {
    children: 'Small Button (*-sm)',
    className:
      'bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm',
  },
};

// Button with Icon (assuming an icon is available)
export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <div className="flex items-center space-x-2 flex-nowrap w-full">
        <ArrowCurvedDownRight className="w-12 h-12" />
        <span>With Text</span>
      </div>
    ),
    className:
      'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded inline-flex items-center',
  },
};
