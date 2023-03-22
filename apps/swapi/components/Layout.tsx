import { PageLayout } from '@with-nx/react-ui';
import Head from 'next/head';

interface SwapiLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

function SwapiLayout({
  children,
  className,
  title,
  description,
  hideNavBar: hideNavBarProp,
}: SwapiLayoutProps) {
  return (
    <PageLayout header="header" footer="footer" hideNavBar hideFooter>
      <Head>
        <title>{title ? title : 'Home | SWAPI'}</title>
        <meta
          name="description"
          content={
            description
              ? description
              : 'Here is a project was for a Front End Engineer position that consumes a free API and creates pagination to view all entries.'
          }
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link
          href="../assets/images/favicon.ico"
          type="image/x-icon"
          rel="icon"
        />
      </Head>
      {children}
    </PageLayout>
  );
}

export default SwapiLayout;
