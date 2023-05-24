import Tab from './tab';
import { TabPanelProps } from '@with-nx/types';

export function TabPanel({ children, isActive }: TabPanelProps) {
  return (
    <div
      className={`${
        isActive ? 'block' : 'hidden'
      } border border-lightgrey rounded-md`}
    >
      {children}
    </div>
  );
}

export default TabPanel;
