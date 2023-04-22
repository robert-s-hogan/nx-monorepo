import styles from './tab.module.css';

/* eslint-disable-next-line */
export interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Tab;
