import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui/templates';

import DbsMarinHeader from './DbsMarinHeader';

const DbsMarinFooter = dynamic(() => import('./DbsMarinFooter'), {
  ssr: false,
});

interface DbsMarinLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

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
          name="description"
          content={description ? description : 'Database solutions consulting.'}
        />
      </Head>
      <div className="container mx-auto">{children}</div>
    </PageLayout>
  );
};

export default DbsMarinLayout;
