import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';
import { PageLayoutProps, DbsMarinLayoutProps } from '@with-nx/types';

import DbsMarinHeader from './DbsMarinHeader';

const DbsMarinFooter = dynamic(() => import('./DbsMarinFooter'), {
  ssr: false,
});

const DbsMarinLayout: React.FC<DbsMarinLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: DbsMarinLayoutProps) => {
  return (
    <PageLayout
      className={className ? className : 'w-full'}
      header={hideNavBarProp ? '' : <DbsMarinHeader />}
      footer={<DbsMarinFooter />}
    >
      <Head>
        <title>{title ? title : 'DBSMarin'}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <meta
          name="description"
          content={description ? description : 'Database solutions consulting.'}
        />
      </Head>
      <div className="container mx-auto">{children}</div>
    </PageLayout>
  );
};

export default DbsMarinLayout;
