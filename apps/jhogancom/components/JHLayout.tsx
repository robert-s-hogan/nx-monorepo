import dynamic from 'next/dynamic';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import JHHeader from './JHHeader';

const JHFooter = dynamic(() => import('./JHFooter'), {
  ssr: false,
});

const JHLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      header={hideNavBarProp ? '' : <JHHeader />}
      footer={<JHFooter />}
    >
      <Seo
        title={title ? title : 'Portfolio | Jessca Hogan M.A.'}
        description={
          description
            ? description
            : 'Discover Jessica Hogan, a Data Scientist and Data Analyst specializing in Python, machine learning, SQL, and statistics. With a diverse background and a focus on delivering actionable insights, Jessica is ready to help you make data-driven decisions.'
        }
        url="https://www.jessicahoganma.com/"
        faviconPath="https://app-assets.vercel.app/apps/JH/favicon.ico"
        image="https://app-assets.vercel.app/apps/JH/jessica_portrait.webp"
        twitterHandle="@jessicahoganma"
        siteName="Jessica Hogan's Portfolio"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Jessica Hogan, Data Scientist, Data Analyst, Python, machine learning, SQL, statistics, actionable insights"
      />
      {children}
    </PageLayout>
  );
};

export default JHLayout;
