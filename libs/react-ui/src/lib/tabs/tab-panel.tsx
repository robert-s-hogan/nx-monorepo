import tabPanelStyles from './tab-panel.module.css';

/* eslint-disable-next-line */
export interface TabPanelProps {
  children: React.ReactNode;
  isActive?: boolean;
}

export function TabPanel({ children, isActive }: TabPanelProps) {
  return (
    <div
      className={`tab-panel ${tabPanelStyles['tabPanel']} ${
        isActive ? tabPanelStyles['active'] : ''
      }`}
    >
      {children}
    </div>
  );
}

export default TabPanel;
