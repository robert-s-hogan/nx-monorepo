import tabStyles from './tab.module.css';
import { Button } from '../button/button';

/* eslint-disable-next-line */
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <Button
      className={`tab ${tabStyles['tab']} ${
        isActive ? `${tabStyles['active']} tab-active` : ''
      }`}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}

export default Tab;
