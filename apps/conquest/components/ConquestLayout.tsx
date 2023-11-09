import { PageLayout } from '@with-nx/react-ui';
import Head from 'next/head';
import { PageLayoutProps } from '@with-nx/types';

import ConquestHeader from './ConquestHeader';

export default function ConquestLayout({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) {
  return (
    <PageLayout header={<ConquestHeader />} footer={null}>
      <Head>
        <title>{title ? title : 'Home | Conquest of Heroes'}</title>
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
              : 'Conquest of Heroes a DND Dungeon Master Tool.'
          }
        />
        <link rel="icon" href="./assets/conquest_logo.ico" />
      </Head>

      <div className="max-w-full container mx-auto">
        <main>{children}</main>
      </div>
    </PageLayout>
  );
}
