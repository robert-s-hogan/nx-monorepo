import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps } from '@with-nx/types';

import TheosDndHeader from './TheosDndHeader';

// const DevBlogFooter = dynamic(() => import('./DevBlogFooter'), { ssr: false });

const DevBlogLayout = ({
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
      //   footer={<DevBlogFooter />}
    >
      <Seo
        title={
          title ? title : 'Robert Hogan - Front-End UI Engineer | Portfolio'
        }
        description={
          description
            ? description
            : 'Robert Hogan, a seasoned Front-End UI Engineer crafting efficient and user-centric digital experiences. Explore highlighted projects such as the p2w Draft Tool, React UI Library, and Concentration game.'
        }
        url="https://www.roberthogan.dev/"
        faviconPath="http://robertshogan.dreamhosters.com/projects/devblog/favicon.ico"
        image="http://robertshogan.dreamhosters.com/projects/rshogancom/final-logo.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogans Portfolio"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Robert Hogan, Front-End UI Engineer, Portfolio, p2w Draft Tool, React UI Library, Concentration, web development, digital experiences, fantasy football tool, Yahoo fantasy football, UI design, React."
      />
      <div
        className={`mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : ''
        } selection:bg-primary container max-w-7xl ${
          className ? className : ''
        }`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default DevBlogLayout;
