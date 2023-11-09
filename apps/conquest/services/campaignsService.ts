import { Campaign } from '../types/campaign';

export const fetchCampaignById = async (id: number): Promise<Campaign> => {
  const res = await fetch(`http://localhost:3333/api/campaign/${id}`);
  const campaign = await res.json();
  return campaign.campaign;
};

export const postNewCampaign = async (
  campaign: Campaign
): Promise<Campaign> => {
  const res = await fetch(`http://localhost:3333/api/campaign`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(campaign),
  });
  const newCampaign = await res.json();
  return newCampaign.campaign;
};
