import { CampaignProvider } from '@conquestContexts/CampaignContext';
import { AuthProvider } from '@conquestContexts/AuthContext';

interface CampaignsLayoutProps {
  children: React.ReactNode;
}

const CampaignsLayout = ({ children }: CampaignsLayoutProps) => {
  return (
    <AuthProvider>
      <CampaignProvider>{children}</CampaignProvider>
    </AuthProvider>
  );
};

export default CampaignsLayout;
