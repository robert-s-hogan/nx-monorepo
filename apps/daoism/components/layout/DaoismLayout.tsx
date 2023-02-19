import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';

import DaoismHeader from './DaoismHeader';

const DaoismFooter = dynamic(() => import('./DaoismFooter'), { ssr: false });

interface DaosimLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const DaosimLayout: React.FC<DaosimLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: DaosimLayoutProps) => {
  return (
    <PageLayout
      className={className ? className : 'w-full'}
      header={hideNavBarProp ? '' : <DaoismHeader />}
      footer={<DaoismFooter />}
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

export default DaosimLayout;
