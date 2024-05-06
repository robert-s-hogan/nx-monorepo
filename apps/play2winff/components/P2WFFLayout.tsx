import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import PlayToWinFFHeader from './P2WFFHeader';

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
      //   footer={<JHFooter />}
      className="md:m-4 lg:mx-6  shadow-lg pb-16"
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
        faviconPath="https://app-assets.vercel.app/apps/play2winff/play2winff_logo_nobg.png"
        image="https://app-assets.vercel.app/apps/play2winff/play2winff_logo_nobg.png"
        twitterHandle="@Play2WinFF"
        siteName="Play 2 Win Fantasy Football"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Fantasy Football, Mock Draft Wizard, NFL News, Draft Strategies, Play 2 Win, Football Analytics"
      />
      {children}
    </PageLayout>
  );
};

export default PlayToWinFFLayout;
