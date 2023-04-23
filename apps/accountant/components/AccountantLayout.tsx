import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui';
import { useRouter } from 'next/router';
import { Seo } from '@with-nx/nextjs-react-ui';

import AccountantHeader from './AccountantHeader';

const AccountantFooter = dynamic(() => import('./AccountantFooter'), {
  ssr: false,
});

interface ChilloutLayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  hideNavBar?: boolean;
}

const ChilloutLayout: React.FC<ChilloutLayoutProps> = ({
  children,
  className = '',
  title,
  description,
  hideNavBar: hideNavBarProp,
}: ChilloutLayoutProps) => {
  const router = useRouter();
  const asPath = router.asPath;
  const hideMaxWidth7xl = asPath.includes('projects/dnd-interactive-map');
  return (
    <PageLayout
      className={`w-full ${className}`}
      header={hideNavBarProp ? '' : <AccountantHeader />}
      footer={<AccountantFooter />}
    >
      <Seo
        title={
          title
            ? title
            : 'Cleveland Accounting Services & Consulting | Expert Tax Solutions'
        }
        description={
          description
            ? description
            : 'Cleveland Accounting Services & Consulting offers comprehensive accounting, bookkeeping, and tax solutions for businesses. Our team of dedicated experts is ready to help with accurate bookkeeping, business registration, and tax preparation services.'
        }
        url="https://accountant-nx.vercel.app/"
        faviconPath="/favicon.ico"
        image="/images/accounting-logo.jpg"
        twitterHandle="@ClevelandAccounting"
        siteName="Cleveland Accounting Services & Consulting"
        appleTouchIconPath="/apple-touch-icon.png"
        keywords="Cleveland, Accounting, Services, Consulting, bookkeeping, tax, expert, business registration, tax preparation, financial services, accounting solutions, Cleveland accounting firm"
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
