import { FloatingFooter, PageLayout } from '@with-nx/react-ui';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps } from '@with-nx/types';

import TheosDndHeader from './TheosDndHeader';

const TheosDndLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  const hideMaxWidth7xl = false;
  return (
    <PageLayout
      className={`w-full min-h-screen ${className} pulse-bg`}
      header={hideNavBarProp ? '' : <TheosDndHeader />}
      footer={<FloatingFooter currentApp="theos-dnd" />}
    >
      <Seo
        title={title ? title : "Theo's D&D | Campaign Companion"}
        description={
          description
            ? description
            : "Theo's D&D campaign companion — manage campaigns and encounters, roll dice, and track characters for your tabletop sessions."
        }
        url="https://theos-dnd-nx.vercel.app"
        faviconPath="https://app-assets.vercel.app/apps/theos-dnd/favicon.ico"
        image="https://app-assets.vercel.app/apps/theos-dnd/favicon.ico"
        twitterHandle="@robert_s_hogan"
        siteName="Theo's D&D"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="D&D, Dungeons and Dragons, campaign companion, dice roller, character tracker, encounter tracker, tabletop RPG"
      />
      <div
        className={`mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : ''
        } selection:bg-primary container max-w-7xl pb-20 ${
          className ? className : ''
        }`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default TheosDndLayout;
