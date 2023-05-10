import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps, ChilloutLayoutProps } from '@with-nx/types';

import ChilloutHeader from './ChilloutHeader';

const ChilloutFooter = dynamic(() => import('./ChilloutFooter'), {
  ssr: false,
});

const ChilloutLayout: React.FC<ChilloutLayoutProps> = ({
  children,
  className = '',
  title,
  description,
  hideNavBar: hideNavBarProp,
}: ChilloutLayoutProps) => {
  const router = useRouter();
  const asPath = router.asPath;
  const hideMaxWidth7xl =
    asPath.includes('projects/dnd-interactive-map') || asPath.includes('/');
  return (
    <PageLayout
      className={`${className}`}
      header={hideNavBarProp ? '' : <ChilloutHeader />}
      footer={<ChilloutFooter />}
    >
      <Seo
        title={title ? title : 'We Keep You Cool | Premium Cooling Solutions'}
        description={
          description
            ? description
            : 'Discover top-quality cooling products and solutions at We Keep You Cool. Explore our extensive range of air conditioners, innovative features, and professional services to keep your home and office cool and comfortable.'
        }
        url="https://www.wekeepyoucool.com/"
        faviconPath="/favicon.ico"
        image="/images/cooling-logo.jpg"
        twitterHandle="@WeKeepYouCool"
        siteName="We Keep You Cool"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="cooling solutions, air conditioners, home cooling, office cooling, cooling products, energy-efficient, innovative features, professional services, We Keep You Cool"
      />
      <div
        className={`mx-auto ${
          hideMaxWidth7xl ? 'max-w-full' : 'max-w-7xl'
        } selection:bg-primary ${className}`}
      >
        {children}
      </div>
    </PageLayout>
  );
};

export default ChilloutLayout;
