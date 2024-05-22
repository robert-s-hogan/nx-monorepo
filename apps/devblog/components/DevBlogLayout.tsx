import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { useScroll, useTransform } from 'framer-motion';
import React from 'react';

import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps } from '@with-nx/types';

import DevBlogHeader from './DevBlogHeader';
import { HeroEffect } from './HeroEffect';

const DevBlogFooter = dynamic(() => import('./DevBlogFooter'), { ssr: false });

const DevBlogLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
  hideNavBar = true,
}: PageLayoutProps) => {
  const router = useRouter();
  const asPath = router.asPath;
  const hideMaxWidth7xl = asPath.includes('projects/dnd-interactive-map');
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <PageLayout
      className={`w-full min-h-screen ${className}`}
      header={hideNavBarProp ? '' : <DevBlogHeader />}
      footer={<DevBlogFooter />}
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
        faviconPath="https://app-assets.vercel.app/apps/devblog/favicon.ico"
        image="https://app-assets.vercel.app/apps/devblog/rsh_logo.png"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogans Portfolio"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Robert Hogan, Front-End UI Engineer, Portfolio, p2w Draft Tool, React UI Library, Concentration, web development, digital experiences, fantasy football tool, Yahoo fantasy football, UI design, React."
      />
      {!hideNavBar && (
        <div
          className="h-[300vh] max-w-full w-full relative overflow-clip"
          ref={ref}
        >
          <HeroEffect
            pathLengths={[
              pathLengthFirst,
              pathLengthSecond,
              pathLengthThird,
              pathLengthFourth,
              pathLengthFifth,
            ]}
          />
        </div>
      )}
      <div
        className={`mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : ''
        } selection:bg-primary ${className ? className : ''}`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default DevBlogLayout;
