import dynamic from 'next/dynamic';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import JHoganComHeader from './JHoganComHeader';

const JHoganComFooter = dynamic(() => import('./JHoganComFooter'), {
  ssr: false,
});

const JHoganComLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      header={hideNavBarProp ? '' : <JHoganComHeader />}
      footer={<JHoganComFooter />}
    >
      <Seo
        title={title ? title : 'Portfolio | Jessca Hogan M.A.'}
        description={
          description
            ? description
            : 'Discover Jessica Hogan, a Data Scientist and Data Analyst specializing in Python, machine learning, SQL, and statistics. With a diverse background and a focus on delivering actionable insights, Jessica is ready to help you make data-driven decisions.'
        }
        url="https://www.jessicahoganma.com/"
        faviconPath="/favicon.ico"
        image="/images/jessica_portrait.webp"
        twitterHandle="@jessicahoganma"
        siteName="Jessica Hogan's Portfolio"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Jessica Hogan, Data Scientist, Data Analyst, Python, machine learning, SQL, statistics, actionable insights"
      />
      {children}
    </PageLayout>
  );
};

export default JHoganComLayout;
