import { CampaignProvider } from '../contexts/CampaignContext';
import { AuthProvider } from '../contexts/AuthContext';

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
