'use client';

import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import useSWR from 'swr';

import Layout from '../components/ConquestLayout';
import ConquestSection from '../components/ConquestSection';
import { Heading, Text } from '@with-nx/generic-ui';
import withAuth from '../utils/withAuth';
import { Campaign } from '../types';
import { fetchCampaigns as fetchCampaignsService } from '../services/campaignService';

const Campaigns: NextPage = () => {
  const {
    data: campaigns,
    error,
    mutate,
  } = useSWR<Campaign[]>('campaigns', fetchCampaignsService);

  if (error) return <div>Failed to load campaigns</div>;
  if (!campaigns) return <div>Loading...</div>;

  return (
    <Layout title="Campaigns | Conquest">
      <ConquestSection>
        <Heading level={1} text="Campaigns" />
        {campaigns.map((campaign) => (
          <div key={campaign.id}>
            <Link href={`/campaigns/${campaign.slug}`}>
              <Heading level={2} text={campaign.name} />
            </Link>
            <ul className="ml-5">
              <Text
                text={`# of players: ${campaign.numberOfPlayers.toString()} `}
              />
            </ul>
          </div>
        ))}
      </ConquestSection>
    </Layout>
  );
};

export default withAuth(Campaigns, { authenticationRequired: true });
