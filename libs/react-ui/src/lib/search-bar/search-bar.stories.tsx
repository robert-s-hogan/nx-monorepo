// search-bar.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './search-bar';
import { FaSearch } from 'react-icons/fa';

const meta: Meta = {
  component: SearchBar,
  title: 'SearchBar',
  title: 'Molecules/SearchBar',
};
export default meta;

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Search for something',
  icon: <FaSearch />,
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<SearchBar
  placeholder="Search for something"
  icon={<FaSearch />}
/>
`,
    },
  },
};
