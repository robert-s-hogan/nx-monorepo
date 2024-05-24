'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from 'react';
import {
  addCampaign,
  updateCampaign,
  deleteCampaign,
  fetchCampaigns,
} from '../services/firebaseService';
import { Campaign, CampaignContextType, ProviderProps } from '../types';
import { FirestoreDocument } from '@with-nx/firebase';

// Define state and action types
type State = {
  campaigns: FirestoreDocument<Campaign>[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: 'FETCH_SUCCESS'; payload: FirestoreDocument<Campaign>[] }
  | { type: 'ADD_SUCCESS'; payload: FirestoreDocument<Campaign> }
  | { type: 'EDIT_SUCCESS'; payload: { id: string; data: Partial<Campaign> } }
  | { type: 'DELETE_SUCCESS'; payload: string }
  | { type: 'SET_LOADING' }
  | { type: 'SET_ERROR'; payload: string };

const initialState: State = {
  campaigns: [],
  loading: false,
  error: '',
};

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { ...state, campaigns: action.payload, loading: false, error: '' };
    case 'ADD_SUCCESS':
      return {
        ...state,
        campaigns: [...state.campaigns, action.payload],
        loading: false,
        error: '',
      };
    case 'EDIT_SUCCESS':
      return {
        ...state,
        campaigns: state.campaigns.map((campaign) =>
          campaign.id === action.payload.id
            ? { ...campaign, ...action.payload.data }
            : campaign
        ),
        loading: false,
        error: '',
      };
    case 'DELETE_SUCCESS':
      return {
        ...state,
        campaigns: state.campaigns.filter(
          (campaign) => campaign.id !== action.payload
        ),
        loading: false,
        error: '',
      };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

export const useCampaignsContext = () => {
  const context = useContext(CampaignContext);
  if (!context)
    throw new Error('useCampaigns must be used within a CampaignProvider');
  return context;
};

// CampaignContext.tsx
export const CampaignProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCampaignsData = useCallback(async () => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const data = await fetchCampaigns();
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: data.map((doc) => ({ ...doc, id: doc.id || '' })),
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    }
  }, []);

  useEffect(() => {
    fetchCampaignsData();
  }, [fetchCampaignsData]);

  useEffect(() => {
    console.log('Campaigns state updated:', state.campaigns);
  }, [state.campaigns]);

  const handleAddCampaign = async (campaignData: Campaign) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const newCampaignId = await addCampaign(campaignData);
      const newCampaign = { ...campaignData, id: newCampaignId };
      dispatch({ type: 'ADD_SUCCESS', payload: newCampaign });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    }
  };

  const handleEditCampaign = async (
    id: string,
    campaignData: Partial<Campaign>
  ) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      await updateCampaign(id, campaignData);
      dispatch({ type: 'EDIT_SUCCESS', payload: { id, data: campaignData } });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    }
  };

  const handleDeleteCampaign = async (id: string) => {
    console.log(`Attempting to delete campaign with ID: ${id}`);
    dispatch({ type: 'SET_LOADING' });
    try {
      await deleteCampaign(id);
      console.log(`Successfully deleted campaign with ID: ${id}`);
      dispatch({ type: 'DELETE_SUCCESS', payload: id });
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error in handleDeleteCampaign:', err.message);
        dispatch({ type: 'SET_ERROR', payload: err.message });
      }
    }
  };

  const value = {
    campaigns: state.campaigns,
    loading: state.loading,
    error: state.error,
    fetchCampaigns: fetchCampaignsData,
    addCampaign: handleAddCampaign,
    editCampaign: handleEditCampaign,
    deleteCampaign: handleDeleteCampaign,
  };

  console.log('CampaignProvider initialized');

  return (
    <CampaignContext.Provider value={value}>
      {children}
    </CampaignContext.Provider>
  );
};

// useCampaignForm.ts
export const useCampaignForm = () => {
  const { addCampaign, editCampaign, deleteCampaign } = useCampaignsContext();

  const handleAddCampaign = async (campaignData: Campaign) => {
    console.log(`Adding campaign: ${JSON.stringify(campaignData)}`);
    await addCampaign(campaignData);
  };

  const handleEditCampaign = async (
    id: string,
    campaignData: Partial<Campaign>
  ) => {
    console.log(
      `Editing campaign ID: ${id} with data: ${JSON.stringify(campaignData)}`
    );
    await editCampaign(id, campaignData);
  };

  const handleDeleteCampaign = async (id: string) => {
    console.log(`Deleting campaign ID: ${id}`);
    await deleteCampaign(id);
  };

  return {
    handleAddCampaign,
    handleEditCampaign,
    handleDeleteCampaign,
  };
};
