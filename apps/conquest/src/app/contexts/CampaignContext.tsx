'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import {
  addCampaign,
  editCampaign,
  deleteCampaign,
  fetchCampaigns,
} from '@conquestServices/campaignService';
import { CampaignContextType } from '@conquestTypes/Campaign';
import { ProviderProps } from '@conquestTypes/Utility';

export const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

export const useCampaigns = () => {
  const context = useContext(CampaignContext);
  if (!context)
    throw new Error('useCampaigns must be used within a CampaignProvider');
  return context;
};

export const CampaignProvider: React.FC<ProviderProps> = ({ children }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const value = {
    campaigns,
    setCampaigns,
    loading,
    error,
    fetchCampaigns,
    addCampaign,
    editCampaign,
    deleteCampaign,
  };

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};
