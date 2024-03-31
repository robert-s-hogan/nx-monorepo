// app/campaigns/[campaignName]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Layout from '@components/Layout';
import { fetchCampaignBySlug } from '@services/campaignService';
import { Campaign } from '../../types';

export default function CampaignPage() {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Extract the campaign slug from the URL
    const slug = pathname.split('/').pop();
    if (slug) {
      const fetchAndSetCampaign = async () => {
        const fetchedCampaign = await fetchCampaignBySlug(
          decodeURIComponent(slug)
        );
        setCampaign(fetchedCampaign);
      };
      fetchAndSetCampaign();
    }
  }, [pathname]);

  if (!campaign) return <div>Loading...</div>;

  return (
    <Layout title={`${campaign.name} | Conquest`}>
      <div>
        <h1>{campaign.name}</h1>
        {/* Display other details of the campaign */}
      </div>
    </Layout>
  );
}
