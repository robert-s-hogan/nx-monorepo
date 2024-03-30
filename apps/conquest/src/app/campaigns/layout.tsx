import { CampaignProvider } from '@contexts/CampaignContext';
import { AuthProvider } from '@contexts/AuthContext';

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
