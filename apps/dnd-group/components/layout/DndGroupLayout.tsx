import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps } from '@with-nx/types';

import DndGroupHeader from './DndGroupHeader';

const DndGroupFooter = dynamic(() => import('./DndGroupFooter'), {
  ssr: false,
});

const DndGroupLayout: React.FC<PageLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  return (
    <PageLayout
      className={className ? className : 'w-full'}
      header={hideNavBarProp ? '' : <DndGroupHeader />}
      footer={<DndGroupFooter />}
    >
      <Head>
        <title>{title ? title : 'Daosim'}</title>
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
              : 'A site dedicated to daoism and eastern philosophy.'
          }
        />
      </Head>
      <div className="container mx-auto">{children}</div>
    </PageLayout>
  );
};

export default DndGroupLayout;
