import dynamic from 'next/dynamic';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import PlayToWinFFHeader from './PlayToWinFFHeader';

// const JHoganComFooter = dynamic(() => import('./JHoganComFooter'), {
//   ssr: false,
// });

const PlayToWinFFLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      header={hideNavBarProp ? '' : <PlayToWinFFHeader />}
      //   footer={<JHoganComFooter />}
      className="bg-gunmetal md:my-4 md:mx-2 shadow-lg pb-16"
    >
      <Seo
        title={
          title ? title : 'Play 2 Win Fantasy Football | Mock Draft Wizard'
        }
        description={
          description
            ? description
            : 'Play 2 Win Fantasy Football brings you the latest news, strategies, and tools for success. Explore the mock draft wizard and stay ahead of the competition.'
        }
        url="https://play2winff-nx.vercel.app"
        faviconPath="https://rshogan.imgix.net/projects/play2winff/favicon.ico"
        image="https://rshogan.imgix.net/projects/play2winff/play2winff_logo.png"
        twitterHandle="@Play2WinFF" // Replace with a relevant Twitter handle
        siteName="Play 2 Win Fantasy Football"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Fantasy Football, Mock Draft Wizard, NFL News, Draft Strategies, Play 2 Win, Football Analytics"
      />
      {children}
    </PageLayout>
  );
};

export default PlayToWinFFLayout;
