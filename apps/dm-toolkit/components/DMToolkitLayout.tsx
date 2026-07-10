import { Seo } from '@with-nx/nextjs-react-ui';
import { FloatingFooter, PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import DMToolkitHeader from './DMToolkitHeader';

const DMToolkitLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      header={<DMToolkitHeader />}
      hideNavBar={hideNavBarProp}
      footer={<FloatingFooter currentApp="dm-toolkit" />}
      className={`min-h-screen bg-stone-950 pb-16 ${className ?? ''}`}
    >
      <Seo
        title={title ? title : 'DM Toolkit'}
        description={
          description
            ? description
            : 'Digital character cards, random events, and session control for tabletop RPG sessions.'
        }
        url="https://dm-toolkit.the-hogans.com"
        faviconPath="/favicon.svg"
        image="https://dm-toolkit.the-hogans.com/og-image.png"
        siteName="DM Toolkit"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="D&D, Dungeons and Dragons, DM toolkit, character cards, session tracker, dice roller, tabletop RPG"
      />
      {children}
    </PageLayout>
  );
};

export default DMToolkitLayout;
