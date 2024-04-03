'use client';

import React from 'react';
import { NextPage } from 'next';
import useSWR from 'swr';

import Layout from '@conquestComponents/Layout';
import withAuth from '@conquestUtils/withAuth';
import { Campaign } from '@conquestTypes/Campaign';
import { fetchCampaigns as fetchCampaignsService } from '@conquestServices/campaignService';
import CampaignListWithModal from '@conquestComponents/CampaignListWithModal';

const CampaignsPage: NextPage = () => {
  const {
    data: campaigns,
    error,
    mutate,
  } = useSWR<Campaign[]>('campaigns', fetchCampaignsService);

  if (error) return <div>Failed to load campaigns</div>;
  if (!campaigns) return <div>Loading...</div>;

  return (
    <Layout title="Campaigns | Conquest">
      <div className="max-w-4xl xl:max-w-7xl container mx-auto space-y-8 mt-8 px-4">
        <CampaignListWithModal campaigns={campaigns} hideEdit={true} />
      </div>
    </Layout>
  );
};

export default withAuth(CampaignsPage, { authenticationRequired: true });
