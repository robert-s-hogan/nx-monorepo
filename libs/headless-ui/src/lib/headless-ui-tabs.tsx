import { Tab } from '@headlessui/react';

export interface HeadlessUiTabsProps {
  tabs: { name: string; content: string }[];
}

const HeadlessUiTabs: React.FC<HeadlessUiTabsProps> = ({ tabs }) => {
  return (
    <Tab.Group>
      <Tab.List>
        {tabs.map((tab) => (
          <Tab key={tab.name}>{tab.name}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.name}>{tab.content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default HeadlessUiTabs;
