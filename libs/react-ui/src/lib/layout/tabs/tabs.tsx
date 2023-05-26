import React, { useState } from 'react';
import TabList from './tab-list';
import TabPanel from './tab-panel';
import { TabsProps } from '@with-nx/types';

export function Tabs({ data }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tabs">
      <TabList
        tabs={data}
        activeIndex={activeIndex}
        onTabClick={handleTabClick}
      />
      {data.map((tab, index) => (
        <TabPanel key={index} isActive={activeIndex === index}>
          {tab.content}
        </TabPanel>
      ))}
    </div>
  );
}

export default Tabs;
