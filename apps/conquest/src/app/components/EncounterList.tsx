import React from 'react';
import { EncounterListProps } from '../types/Encounter';

const EncounterList: React.FC<EncounterListProps> = ({ encounters = [] }) => {
  return (
    <div className="space-y-4">
      {encounters.length === 0 && <p>No encounters found</p>}
      <ul>
        {encounters &&
          encounters.map((encounter, index) => (
            <li key={index}>{encounter.id}</li>
          ))}
      </ul>
    </div>
  );
};

export default EncounterList;
