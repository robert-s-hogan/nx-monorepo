'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  addEncounter as addEncounterService,
  editEncounter as editEncounterService,
  deleteEncounter as deleteEncounterService,
  fetchEncountersByCampaign,
} from '../services/firebaseService';
import { Encounter, EncounterContextType, ProviderProps } from '../types';
import { FirestoreDocument } from '@with-nx/firebase';

const EncounterContext = createContext<EncounterContextType | undefined>(
  undefined
);

export const useEncountersContext = () => {
  const context = useContext(EncounterContext);
  if (!context) {
    throw new Error(
      'useEncountersContext must be used within an EncounterProvider'
    );
  }
  return context;
};

export const EncounterProvider: React.FC<ProviderProps> = ({ children }) => {
  const [encounters, setEncounters] = useState<FirestoreDocument<Encounter>[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchEncounters = useCallback(async (campaignId: string) => {
    setLoading(true);
    try {
      const data = await fetchEncountersByCampaign(campaignId);
      setEncounters(data);
      setError('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const addEncounter = async (encounterData: Encounter) => {
    setLoading(true);
    try {
      const newEncounterId = await addEncounterService(encounterData);
      const newEncounter = { ...encounterData, id: newEncounterId };
      setEncounters((prev) => [...prev, newEncounter]);
      setError('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const editEncounter = async (
    id: string,
    encounterData: Partial<Encounter>
  ) => {
    setLoading(true);
    try {
      await editEncounterService(id, encounterData);
      setEncounters((prev) =>
        prev.map((encounter) =>
          encounter.id === id ? { ...encounter, ...encounterData } : encounter
        )
      );
      setError('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const deleteEncounter = async (id: string) => {
    setLoading(true);
    try {
      await deleteEncounterService(id);
      setEncounters((prev) => prev.filter((encounter) => encounter.id !== id));
      setError('');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const value = {
    encounters,
    loading,
    error,
    fetchEncounters,
    addEncounter,
    editEncounter,
    deleteEncounter,
  };

  return (
    <EncounterContext.Provider value={value}>
      {children}
    </EncounterContext.Provider>
  );
};
