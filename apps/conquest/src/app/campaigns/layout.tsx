import { CampaignProvider } from '../contexts/CampaignContext';
import { AuthProvider } from '../contexts/AuthContext';
import ErrorBoundary from '../components/ErrorBoundary';

interface CampaignsLayoutProps {
  children: React.ReactNode;
}

const CampaignsLayout = ({ children }: CampaignsLayoutProps) => {
  return (
    <AuthProvider>
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <CampaignProvider>{children}</CampaignProvider>
      </ErrorBoundary>
    </AuthProvider>
  );
};

export default CampaignsLayout;
