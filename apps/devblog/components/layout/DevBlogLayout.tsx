import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import DevBlogHeader from './DevBlogHeader';

const DevBlogFooter = dynamic(() => import('./DevBlogFooter'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<DevBlogHeader />} footer={<DevBlogFooter />}>
      {children}
    </PageLayout>
  );
};

export default Layout;
