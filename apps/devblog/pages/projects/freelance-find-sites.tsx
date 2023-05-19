import axios from 'axios';
import { Section, Tabs } from '@with-nx/react-ui';
import { X } from '@with-nx/icons';

import DevBlogLayout from '../../components/layout/DevBlogLayout';
import VersionOne from '../../components/projects/find-freelance-sites/version-one';
import VersionTwo from '../../components/projects/find-freelance-sites/version-two';

export default function FreelanceFindSites() {
  const tabsData = [
    {
      label: 'V1',
      content: <VersionOne />,
    },
    {
      label: 'V2',
      content: <VersionTwo />,
    },
  ];

  return (
    <DevBlogLayout>
      <Section>
        <Tabs data={tabsData} />
      </Section>
    </DevBlogLayout>
  );
}
