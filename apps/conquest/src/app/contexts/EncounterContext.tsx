// contexts/EncounterContext.jsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  addEncounter,
  editEncounter,
  deleteEncounter,
  fetchEncounters,
  fetchEncountersByCampaign,
} from '@services/encounterService'; // Ensure you have these functions defined in your services
import { EncounterContextType, ProviderProps } from '../types'; // Define or import necessary types

export const useEncounters = () => {
  const context = useContext(EncounterContext);
  if (!context)
    throw new Error('useEncounters must be used within an EncounterProvider');
  return context;
};

export const EncounterContext = createContext<EncounterContextType | undefined>(
  undefined
);

export const EncounterProvider: React.FC<ProviderProps> = ({ children }) => {
  const [encounters, setEncounters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const campaignId = 'your-campaign-id'; // You need to define how to get this ID
    setLoading(true);
    fetchEncountersByCampaign(campaignId)
      .then((data) => {
        setEncounters(data);
        setError('');
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const value = {
    encounters,
    setEncounters,
    loading,
    error,
    addEncounter,
    editEncounter,
    deleteEncounter,
    fetchEncounters, // Consider passing a campaignId if encounters are fetched per campaign
  };

  return (
    <EncounterContext.Provider value={value}>
      {children}
    </EncounterContext.Provider>
  );
};
