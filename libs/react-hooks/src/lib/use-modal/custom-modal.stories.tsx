// CustomModal.stories.tsx
//
// Deliberately doesn't import react-ui's real Modal component here — doing
// so previously created a circular dependency (react-ui's multi-step-form
// has a real runtime dependency on this lib's useMultiStepForm, so a
// documentation-only import back into react-ui from a .stories.tsx file
// completed the cycle). This story is about demoing useModal's toggle
// behavior, not Modal's rendering, so a plain div stands in fine.

import { Meta, Story } from '@storybook/react';
import { useModal } from './use-modal';

export default {
  title: 'Components/CustomModal',
} as Meta;

const Template: Story = () => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <button onClick={toggle}>Toggle Modal</button>
      {isShowing && (
        <div role="dialog" aria-label="Checkout">
          <button onClick={toggle}>Close</button>
          Text here
        </div>
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
