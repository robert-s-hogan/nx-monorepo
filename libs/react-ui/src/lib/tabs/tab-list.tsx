import styles from './tab-list.module.css';
import Tab from './tab';
import tabsLisStyles from './tab-list.module.css';

/* eslint-disable-next-line */
export interface TabListProps {
  tabs: { label: string }[];
  activeIndex: number;
  onTabClick: (index: number) => void;
}

export function TabList({ tabs, activeIndex, onTabClick }: TabListProps) {
  return (
    <div className={`tab-list ${tabsLisStyles['tabList']}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          isActive={activeIndex === index}
          onClick={() => onTabClick(index)}
        />
      ))}
    </div>
  );
}

export default TabList;
