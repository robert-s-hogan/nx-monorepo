import dynamic from 'next/dynamic';
import { PageLayout } from '@with-nx/react-ui/templates';

import ConquestOfHeroesHeader from './ConquestOfHeroesHeader';

const ConquestOfHeroesFooter = dynamic(
  () => import('./ConquestOfHeroesFooter'),
  { ssr: false }
);

interface ConquestOfHeroesLayoutProps {
  children: React.ReactNode;
}

const ConquestOfHeroesLayout = ({ children }: ConquestOfHeroesLayoutProps) => {
  return (
    <PageLayout
      header={<ConquestOfHeroesHeader />}
      footer={<ConquestOfHeroesFooter />}
    >
      {children}
    </PageLayout>
  );
};

export default ConquestOfHeroesLayout;
