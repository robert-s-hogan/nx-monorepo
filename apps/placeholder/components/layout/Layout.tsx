import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import Header from './Header';

const Footer = dynamic(() => import('./Footer'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      <main role="main" className="w-full h-full flex-grow overflow-auto">
        {children}
      </main>
    </PageLayout>
  );
};

export default Layout;
