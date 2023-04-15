import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';

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
  return (
    <PageLayout
      className={className ? className : 'w-full bg-gray-800 min-h-screen'}
      header={hideNavBarProp ? '' : <DevBlogHeader />}
      footer={<DevBlogFooter />}
    >
      <Head>
        <title>{title ? title : 'Robert Hogans Blog'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Here is my site where I talk about web developement.'
          }
        />
      </Head>
      <div className="container mx-auto max-w-7xl selection:bg-primary">
        {children}
      </div>
    </PageLayout>
  );
};

export default DevBlogLayout;
