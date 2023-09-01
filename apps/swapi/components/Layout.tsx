import { PageLayout } from '@with-nx/react-ui';
import { Seo } from '@with-nx/nextjs-react-ui';

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
      <Seo
        title={title ? title : 'Home | SWAPI'}
        description={
          description
            ? description
            : 'Explore an engaging site that consumes the https://swapi.dev/ API, showcasing data from the Star Wars universe in a visually appealing and interactive way. Learn how React and react-query are used to fetch data and implement pagination for a seamless user experience.'
        }
        url="https://swapi-nx.vercel.app/"
        faviconPath="https://rshogan.imgix.net/projects/swapi/favicon.ico"
        image="/images/portrait.jpg"
        twitterHandle="@robert_s_hogan"
        siteName="Robert Hogan's SWAPI Project"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="swapi.dev, API, Star Wars, React, react-query, pagination, consuming endpoints, interactive, character cards, web development, API integration."
      />

      {children}
    </PageLayout>
  );
}

export default SwapiLayout;
