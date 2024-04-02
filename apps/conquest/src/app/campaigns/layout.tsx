import { CampaignProvider } from '@conquestContexts/CampaignContext';
import { AuthProvider } from '@conquestContexts/AuthContext';

interface CampaignsLayoutProps {
  children: React.ReactNode;
}

const CampaignsLayout = ({ children }: CampaignsLayoutProps) => {
  // Get the current campaign ID from the router query

  return (
    <AuthProvider>
      <CampaignProvider>{children}</CampaignProvider>
    </AuthProvider>
  );
};

export default CampaignsLayout;
