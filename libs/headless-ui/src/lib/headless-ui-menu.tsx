// libs/your-ui-library/src/lib/my-dropdown.tsx

import { Menu } from '@headlessui/react';

const HeadlessUiMenu: React.FC = () => {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active ? 'bg-blue-500' : ''}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        {/* ... other menu items ... */}
      </Menu.Items>
    </Menu>
  );
};

export default HeadlessUiMenu;
