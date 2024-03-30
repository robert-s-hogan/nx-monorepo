'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import useSWR, { mutate } from 'swr';

import Layout from '@components/Layout';
import CampaignList from '@components/CampaignList';
import CampaignModalManager from '@components/CampaignModalManager';
import withAuth from '@utils/withAuth';
import { Campaign, ModalOperation } from '../types';
import { fetchCampaigns as fetchCampaignsService } from '@services/campaignService';

const CampaignsPage: NextPage = () => {
  // useSWR hook for fetching and caching the campaigns data
  const {
    data: campaigns,
    error,
    mutate,
  } = useSWR<Campaign[]>('campaigns', fetchCampaignsService);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOperation, setModalOperation] = useState<ModalOperation | null>(
    null
  );
  const [modalData, setModalData] = useState<Campaign | null>(null);

  const openModal = (
    operation: ModalOperation,
    data: Campaign | null = null
  ) => {
    setIsModalOpen(true);
    setModalOperation(operation);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalOperation(null);
    setModalData(null);
    // Call mutate to revalidate and refresh campaigns data after modal operations
    mutate();
  };

  if (error) return <div>Failed to load campaigns</div>;
  if (!campaigns) return <div>Loading...</div>;

  return (
    <Layout title="Campaigns | Conquest">
      <div className="max-w-4xl xl:max-w-7xl container mx-auto space-y-8 mt-8 px-4">
        <button onClick={() => openModal('add')} className="btn-primary">
          Add Campaign
        </button>

        <CampaignList
          campaigns={campaigns}
          onEdit={(campaign: Campaign) => openModal('edit', campaign)}
          onDelete={(campaignId: string) => {
            const campaignToDelete = campaigns.find((c) => c.id === campaignId);
            if (campaignToDelete) {
              openModal('delete', campaignToDelete);
            }
          }}
        />
        {isModalOpen && (
          <CampaignModalManager
            isOpen={isModalOpen}
            onClose={closeModal}
            operation={modalOperation || 'add'} // Default to 'add' if operation is null
            campaign={modalData as Campaign} // Cast to Campaign type
          />
        )}
      </div>
    </Layout>
  );
};

export default withAuth(CampaignsPage, { authenticationRequired: true });
