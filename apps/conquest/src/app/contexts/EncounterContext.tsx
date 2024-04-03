import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  addEncounter,
  editEncounter,
  deleteEncounter,
  fetchEncounters,
  fetchEncountersByCampaign,
} from '../services/encounterService';
import { Encounter, EncounterContextType } from '../types';
import { ProviderProps } from '../types';

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
  const [encounters, setEncounters] = useState<Encounter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const campaignId = 'your-campaign-id';
    setLoading(true);
    fetchEncountersByCampaign(campaignId)
      .then((data: Encounter[]) => {
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
    fetchEncounters,
  };

  return (
    <EncounterContext.Provider value={value}>
      {children}
    </EncounterContext.Provider>
  );
};
