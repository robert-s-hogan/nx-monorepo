import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';
import { PageLayoutProps } from '@with-nx/types';

import ChilloutHeader from './ChilloutHeader';

const ChilloutFooter = dynamic(() => import('./ChilloutFooter'), {
  ssr: false,
});

const ChilloutLayout = ({
  children,
  className = '',
  title,
  description,
  hideNavBar: hideNavBarProp,
}: PageLayoutProps) => {
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
        url="https://chillout.robertshogan.com/"
        faviconPath="/favicon.ico"
        image="https://cloudflare-assets-nx-monorepo.vercel.app/chillout/chill-out-logo.svg"
        twitterHandle="@chillout"
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
