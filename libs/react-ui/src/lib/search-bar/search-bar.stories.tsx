// search-bar.stories.tsx

import { Meta, Story } from '@storybook/react';
import SearchBar, { SearchBarProps } from './search-bar';
import { FiSearch } from 'react-icons/fi';

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
  icon: <FiSearch />,
};
Primary.parameters = {
  docs: {
    source: {
      code: `
<SearchBar
  placeholder="Search for something"
  icon={<FiSearch />}
/>
`,
    },
  },
};
