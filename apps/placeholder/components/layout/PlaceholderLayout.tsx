import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';

import PlaceholderHeader from './PlaceholderHeader';

const PlaceholderFooter = dynamic(() => import('./PlaceholderFooter'), {
  ssr: false,
});

interface PlaceholderLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const PlaceholderLayout: React.FC<PlaceholderLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PlaceholderLayoutProps) => {
  return (
    <PageLayout
      className="max-w-7xl container mx-auto "
      header={hideNavBarProp ? '' : <PlaceholderHeader />}
      footer={<PlaceholderFooter />}
    >
      <Head>
        <title>{`${title ? `${title} | Placeholder` : 'Placeholder'}`}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Hi, I am Jessica. Data Scientist and Data Analyst.  I want to help you make the best data-driven decisions and translate data into actionable insights.'
          }
        />
      </Head>
      <main
        role="main"
        className="max-w-7xl container mx-auto h-full flex-grow overflow-auto"
      >
        {children}
      </main>
    </PageLayout>
  );
};

export default PlaceholderLayout;
