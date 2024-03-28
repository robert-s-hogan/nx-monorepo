// import { CampaignProvider } from '@contexts/CampaignContext';

interface CampaignsLayoutProps {
  children: React.ReactNode;
}

const CampaignsLayout = ({ children }: CampaignsLayoutProps) => {
  // Get the current campaign ID from the router query

  return (
    // <CampaignProvider campaignId={campaignId}>{children}</CampaignProvider>
    <main>{children}</main>
  );
};

export default CampaignsLayout;
