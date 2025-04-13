import { Flex, Heading, Section, Tabs, Text } from '@with-nx/react-ui';

import DevBlogLayout from '../../components/DevBlogLayout';
import VersionOne from '../../components/projects/find-freelance-sites/version-one';
import PagespeedInsights from '../../components/projects/find-freelance-sites/pagespeed-insights';

export default function FreelanceFindSites() {
  const tabsData = [
    {
      label: 'Search - Free (10)',
      content: <VersionOne />,
    },
    {
      label: 'Pagespeed Insights',
      content: <PagespeedInsights />,
    },
  ];

  return (
    <DevBlogLayout>
      <Section>
        <Flex className="mb-8 flex-col space-y-4">
          <Heading level={1}>Find Freelance Sites</Heading>
          <Text>
            This tool is to find older websites that need an a refresh. The
            search utilizes Googles Custom Search API with the parameters that
            can help find older websites: age of website, file type of site, and
            exclude terms that show up on the site.
          </Text>
        </Flex>
        <Tabs data={tabsData} />
      </Section>
    </DevBlogLayout>
  );
}
