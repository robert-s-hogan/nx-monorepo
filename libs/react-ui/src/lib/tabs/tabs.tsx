//implementation

// import React from 'react';
// import './styles.css';
// import Tabs from '@with-nx/reac-ui';

// const data = [
//   {
//     label: 'Tab 1',
//     content: 'Content for Tab 1',
//   },
//   {
//     label: 'Tab 2',
//     content: 'Content for Tab 2',
//   },
//   {
//     label: 'Tab 3',
//     content: 'Content for Tab 3',
//   },
// ];

// const App = ()

import React, { useState } from 'react';
import TabList from '../tab-list/tab-list';
import TabPanel from '../tab-panel/tab-panel';
import styles from '../tabs.module.css';

/* eslint-disable-next-line */
export interface TabsProps {
  data: { label: string; content: string }[];
}

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
