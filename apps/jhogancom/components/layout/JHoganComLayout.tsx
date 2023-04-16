import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';

import JHoganComHeader from './JHoganComHeader';

const JHoganComFooter = dynamic(() => import('./JHoganComFooter'), {
  ssr: false,
});

interface JHoganComLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const JHoganComLayout: React.FC<JHoganComLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: JHoganComLayoutProps) => {
  return (
    <PageLayout
      header={hideNavBarProp ? '' : <JHoganComHeader />}
      footer={<JHoganComFooter />}
    >
      <Head>
        <title>{title ? title : 'Home | JessicaHoganMA.com'}</title>
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
              : 'Hi, I am Jessica. Data Scientist and Data Analyst.  I want to help you make the best data-driven decisions and translate data into actionable insights.'
          }
        />
      </Head>
      {children}
    </PageLayout>
  );
};

export default JHoganComLayout;
