import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps } from '@with-nx/types';

import DevBlogHeader from './DevBlogHeader';

const DevBlogFooter = dynamic(() => import('./DevBlogFooter'), { ssr: false });

const DevBlogLayout = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  const router = useRouter();
  const asPath = router.asPath;
  const hideMaxWidth7xl = asPath.includes('projects/dnd-interactive-map');
  return (
    <PageLayout
      className={`w-full min-h-screen ${className}`}
      header={hideNavBarProp ? '' : <DevBlogHeader />}
      footer={<DevBlogFooter />}
    >
      <Seo
        title={title ? title : 'Portfolio | Robert Hogan'}
        description={
          description
            ? description
            : 'Explore Robert Hogans portfolio as a Front End UI/UX Engineer, showcasing his expertise in creating innovative web solutions with cutting-edge technologies like Vercel, NX, and Next.js. Discover his featured projects, including an interactive map, memory game, and more.'
        }
        url="https://www.roberthogan.dev/"
        faviconPath="/favicon.ico"
        image="/images/portrait.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogans Portfolio"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Robert Hogan, Portfolio, Front End UI/UX Engineer, Vercel, NX, Next.js, featured projects, private NX monorepo, Star Wars API Pagination, interactive map, Memory Game, Game of Concentration, vanilla javascript, web development, web solutions."
      />
      <div
        className={`container mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : 'max-w-7xl'
        } selection:bg-primary ${className}`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default DevBlogLayout;
