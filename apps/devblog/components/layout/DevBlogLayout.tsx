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
      className={className ? className : 'w-full'}
      header={hideNavBarProp ? '' : <DevBlogHeader />}
      footer={<DevBlogFooter />}
    >
      <Head>
        <title>{title ? title : 'Daosim'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'A site dedicated to daoism and eastern philosophy.'
          }
        />
      </Head>
      <div className="container mx-auto">{children}</div>
    </PageLayout>
  );
};

export default DevBlogLayout;
