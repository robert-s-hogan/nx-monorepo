import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import PlaceholderHeader from './PlaceholderHeader';

const PlaceholderFooter = dynamic(() => import('./PlaceholderFooter'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout
      className="max-w-7xl container mx-auto "
      header={<PlaceholderHeader />}
      footer={<PlaceholderFooter />}
    >
      <main
        role="main"
        className="max-w-7xl container mx-auto h-full flex-grow overflow-auto"
      >
        {children}
      </main>
    </PageLayout>
  );
};

export default Layout;
