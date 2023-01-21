import { PageLayout } from '@with-nx/react-ui/templates';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<Header />} footer={<Footer />}>
      {children}
    </PageLayout>
  );
};

export default Layout;
