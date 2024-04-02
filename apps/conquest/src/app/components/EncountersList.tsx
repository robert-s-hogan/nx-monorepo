// components/EncountersList.jsx

import React from 'react';

const EncountersList = ({ encounters }) => {
  return (
    <div>
      <h2>Encounters List</h2>
      <ul>
        {encounters &&
          encounters.map((encounter, index) => (
            <li key={index}>{encounter.name}</li> // Display basic info, consider adding more details or actions
          ))}
      </ul>
    </div>
  );
};

export default EncountersList;
