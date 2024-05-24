// campaigns/page.tsx
'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { Heading, Text, Button } from '@with-nx/generic-ui';
import { useCampaignsContext } from '../contexts/CampaignContext';
import { useCampaignForm } from '../hooks/useCampaignForm';
import ConquestCampaignForm from '../components/ConquestCampaignForm';
import ConquestLayout from '../components/ConquestLayout';
import { Campaign } from '../types';

const CampaignsPage: NextPage = () => {
  const { campaigns, loading, error } = useCampaignsContext();
  const { handleAddCampaign, handleDeleteCampaign } = useCampaignForm();
  const [showForm, setShowForm] = useState(false);
  const [newCampaign, setNewCampaign] = useState<Partial<Campaign>>({});

  const handleFormSubmit = async (campaignData: Partial<Campaign>) => {
    await handleAddCampaign(campaignData as Campaign);
    setShowForm(false);
    setNewCampaign({});
  };

  const handleDelete = async (id: string) => {
    try {
      await handleDeleteCampaign(id);
    } catch (error) {
      console.error(`Failed to delete campaign with id: ${id}`, error);
    }
  };

  if (error) return <div>Failed to load campaigns</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Heading level={1} text="Campaigns" />
      <Button
        theme="primary"
        onClick={() => setShowForm(!showForm)}
        text={showForm ? 'Cancel' : 'Add New Campaign'}
      />
      {showForm && (
        <ConquestCampaignForm
          campaign={newCampaign as Campaign}
          onSubmit={handleFormSubmit}
          operation="add"
        />
      )}
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="mb-4 p-4 border rounded shadow">
          <Link href={`/campaigns/${campaign.slug}`}>
            <Heading level={2} text={campaign.name} />
          </Link>
          <ul className="ml-5">
            <Text text={`# of players: ${campaign.numberOfPlayers}`} />
            <Text
              text={`Description: ${campaign.description || 'No description'}`}
            />
          </ul>
          <Button
            theme="danger"
            onClick={() => handleDelete(campaign.id)}
            text="Delete"
          />
        </div>
      ))}
    </div>
  );
};

const PageWithLayout = () => (
  <ConquestLayout>
    <CampaignsPage />
  </ConquestLayout>
);

export default PageWithLayout;
