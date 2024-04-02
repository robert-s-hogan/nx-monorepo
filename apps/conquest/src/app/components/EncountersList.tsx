import React from 'react';
import { EncounterListProps } from '@conquestTypes/Encounter';

const EncountersList: React.FC<EncounterListProps> = ({ encounters = [] }) => {
  return (
    <div>
      <h2>Encounters List</h2>
      <ul>
        {encounters &&
          encounters.map((encounter, index) => (
            <li key={index}>{encounter.id}</li>
          ))}
      </ul>
    </div>
  );
};

export default EncountersList;
