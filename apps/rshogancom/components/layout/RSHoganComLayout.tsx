import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import RSHoganComHeader from './RSHoganComHeader';

const RSHoganComFooter = dynamic(() => import('./RSHoganComFooter'), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

const RSHoganComLayout = ({ children }: LayoutProps) => {
  return (
    <PageLayout header={<RSHoganComHeader />} footer={<RSHoganComFooter />}>
      {children}
    </PageLayout>
  );
};

export default RSHoganComLayout;
