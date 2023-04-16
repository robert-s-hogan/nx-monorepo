import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';

import DevBlogHeader from './DevBlogHeader';

const DevBlogFooter = dynamic(() => import('./DevBlogFooter'), { ssr: false });

interface DevBlogLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const DevBlogLayout: React.FC<DevBlogLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: DevBlogLayoutProps) => {
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
            : 'Meet Robert, a talented Web Developer and UI/UX Engineer with a passion for designing and coding beautifully simple digital products. Explore his impressive portfolio of projects and discover how he can help enhance your digital presence.'
        }
        url="https://www.robertshogan.com"
        faviconPath="/favicon.ico"
        image="/images/portrait.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogans Blog"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Robert, Web Developer, UI/UX Engineer, freelance designer, remote work, responsive, optimize digital marketing, design projects, Front end"
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
