import { Popover } from '@headlessui/react';

const HeadlessUiPopover = () => {
  return (
    <Popover>
      <Popover.Button>Open Popover</Popover.Button>
      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>

        <img src="/solutions.jpg" alt="" />
      </Popover.Panel>
    </Popover>
  );
};

export default HeadlessUiPopover;
