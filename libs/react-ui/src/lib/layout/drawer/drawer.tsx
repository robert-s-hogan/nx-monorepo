import { DrawerProps } from '@with-nx/types';

export const Drawer: React.FC<DrawerProps> = ({ isOpen, children }) => {
  return (
    <div
      className={`fixed right-0 top-0 bottom-0 w-64 bg-gray-100 overflow-y-auto transition-all duration-200 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {children}
    </div>
  );
};
