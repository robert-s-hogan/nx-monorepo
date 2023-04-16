import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';

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
      <Head>
        <title>{title ? title : 'Robert Hogans Blog'}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta
          name="description"
          content={
            description
              ? description
              : 'Here is my site where I talk about web developement.'
          }
        />
      </Head>
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
