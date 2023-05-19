import styles from './tab.module.css';
import { Button } from '@with-nx/react-ui';

/* eslint-disable-next-line */
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <Button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </Button>
  );
}

export default Tab;
