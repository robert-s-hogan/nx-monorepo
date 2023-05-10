import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps } from '@with-nx/types';

import CoffeeShopHeader from './CoffeeShopHeader';

const CoffeeShopFooter = dynamic(() => import('./CoffeeShopFooter'), {
  ssr: false,
});

const ChilloutLayout: React.FC<PageLayoutProps> = ({
  children,
  className = '',
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
  const router = useRouter();
  const asPath = router.asPath;
  const hideMaxWidth7xl = asPath.includes('/');
  return (
    <PageLayout
      className={`w-full  ${className}`}
      header={hideNavBarProp ? '' : <CoffeeShopHeader />}
      footer={<CoffeeShopFooter />}
    >
      <Seo
        title={
          title
            ? title
            : 'Coffee Shop Marketing Expert | Attract More Coffee Lovers'
        }
        description={
          description
            ? description
            : 'Boost your coffee shop business with our expert marketing services. We specialize in website design, SEO, and social media management to help coffee shops attract more customers and create a loyal following. Discover the difference today!'
        }
        url="https://coffe-shop-nx.vercel.app/"
        faviconPath="/favicon.ico"
        image="/images/coffee_hero.png"
        twitterHandle="@CoffeeShopMarketingExpert"
        siteName="Coffee Shop Marketing Expert"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="coffee shop marketing, website design, SEO, social media management, coffee lovers, customer growth, coffee shop success, marketing services, coffee shop promotion"
      />
      <div
        className={`container mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : 'max-w-7xl'
        } selection:bg-primary ${className}`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default ChilloutLayout;
