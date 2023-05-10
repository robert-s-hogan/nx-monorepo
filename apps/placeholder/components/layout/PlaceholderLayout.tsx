import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageLayout } from '@with-nx/react-ui';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps, PlaceholderLayoutProps } from '@with-nx/types';

import PlaceholderHeader from './PlaceholderHeader';

const PlaceholderFooter = dynamic(() => import('./PlaceholderFooter'), {
  ssr: false,
});

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
      <Seo
        title={title ? title : 'Home | SWAPI'}
        description={
          description
            ? description
            : 'Explore an engaging site that consumes the https://swapi.dev/ API, showcasing data from the Star Wars universe in a visually appealing and interactive way. Learn how React and react-query are used to fetch data and implement pagination for a seamless user experience.'
        }
        url="https://swapi-nx.vercel.app/"
        faviconPath="/favicon.ico"
        image="/images/portrait.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogan's SWAPI Project"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="swapi.dev, API, Star Wars, React, react-query, pagination, consuming endpoints, interactive, character cards, web development, API integration."
      />
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
