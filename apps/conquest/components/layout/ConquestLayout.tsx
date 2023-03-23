import { PageLayout } from '@with-nx/react-ui';
import Head from 'next/head';

import ConquestHeader from './ConquestHeader';

interface ConquestLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

export default function ConquestLayout({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: ConquestLayoutProps) {
  return (
    <PageLayout header={<ConquestHeader />} footer={null}>
      <Head>
        <title>{title ? title : 'Home | Conquest of Heroes'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Conquest of Heroes a DND Dungeon Master Tool.'
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full bg-gray-300">
        <div className="max-w-7xl container mx-auto">
          <main>{children}</main>
        </div>
      </div>
    </PageLayout>
  );
}
