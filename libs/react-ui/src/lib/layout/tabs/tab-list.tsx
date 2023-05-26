import Tab from './tab';
import { TabListProps } from '@with-nx/types';

export function TabList({ tabs, activeIndex, onTabClick }: TabListProps) {
  return (
    <div className="flex">
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
