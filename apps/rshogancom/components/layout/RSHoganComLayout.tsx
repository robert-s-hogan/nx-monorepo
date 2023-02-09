import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui/templates';

import RSHoganComHeader from './RSHoganComHeader';

const RSHoganComFooter = dynamic(() => import('./RSHoganComFooter'), {
  ssr: false,
});

interface RSHoganComLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const RSHoganComLayout: React.FC<RSHoganComLayoutProps> = ({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: RSHoganComLayoutProps) => {
  return (
    <PageLayout
      header={hideNavBarProp ? '' : <RSHoganComHeader />}
      footer={<RSHoganComFooter />}
    >
      <Head>
        <title>{title ? title : 'Home | Robert Hogan'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Robert Hogan Web Developer, UI/UX Engineer. I design and code beautifully simple things, and I love what I do.'
          }
        />
      </Head>
      {children}
    </PageLayout>
  );
};

export default RSHoganComLayout;
