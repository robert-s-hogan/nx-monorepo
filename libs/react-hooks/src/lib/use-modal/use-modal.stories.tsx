// use-modal.stories.tsx
//
// Deliberately doesn't import react-ui's real Modal component here — see
// custom-modal.stories.tsx for why (breaks a circular dependency with
// react-ui, which has a real runtime dependency on this lib).

import { Meta, Story } from '@storybook/react';
import { useModal } from './use-modal';

export default {
  title: 'Hooks/useModal',
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
