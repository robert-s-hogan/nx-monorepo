import React from 'react';
import dynamic from 'next/dynamic';
import '../styles/global.css';
import { CampaignProvider } from '../contexts/CampaignContext';
import { EncounterProvider } from '../contexts/EncounterContext';

const ConquestNavbar = dynamic(() => import('./ConquestNavbar'), {
  ssr: false,
});

interface ConquestLayoutProps {
  children: React.ReactNode;
  title?: string;
  loading?: boolean;
}

const ConquestLayout = ({ children, title, loading }: ConquestLayoutProps) => {
  return (
    <CampaignProvider>
      <EncounterProvider>
        <div className="w-full">
          <ConquestNavbar />
          <main className="max-w-4xl 2xl:max-w-7xl container mx-auto flex items-center justify-center flex-col space-y-4 lg:space-y-8">
            {children}
          </main>
        </div>
      </EncounterProvider>
    </CampaignProvider>
  );
};

export default ConquestLayout;
