// pages/encounters/EncounterPage.tsx
'use client';
import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import EncounterForm from '@components/EncounterForm';
// import { Encounter } from '../../../types';
// import { addEncounter, editEncounter } from '@services/encounterService';
// import { useEncounters } from '@hooks/useEncounters';
// import { useEncounterCalculations } from '@hooks/useEncounterCalculations';

const EncounterPage = () => {
  // const [encounter, setEncounter] = useState<Encounter | null>(null);
  // const router = useRouter();
  // const { campaignName, encounterId } = router.query;

  // const { encounters, isLoading, isError, mutate } = useEncounters(
  //   campaignName as string
  // );

  // useEffect(() => {
  //   if (encounterId && encounters) {
  //     const foundEncounter = encounters.find((enc) => enc.id === encounterId);
  //     setEncounter(foundEncounter || null);
  //   }
  // }, [encounterId, encounters]);

  // Use the adjusted useEncounterCalculations hook here
  // const { levelDetails, xpThresholds, adventuringDayXPLimit } =
  //   useEncounterCalculations(encounterId as string, campaignName as string);

  // const handleSubmit = async (encounterData: Encounter) => {
  //   if (encounter) {
  //     await editEncounter(encounter.id, encounterData);
  //   } else {
  //     await addEncounter({
  //       ...encounterData,
  //       campaignId: campaignName as string,
  //     });
  //   }
  //   mutate();
  //   router.push('/path-to-redirect-after-success');
  // };

  // Optionally, display XP and difficulty information here, or pass it to EncounterForm
  return (
    <div>
      <h1>Encounter Dynamic Page</h1>
      {/* <h1>{encounter ? 'Edit Encounter' : 'Add New Encounter'}</h1> */}
      {/* EncounterForm and possibly XP/difficulty display go here */}
      {/* <EncounterForm
        encounter={encounter}
        onSubmit={handleSubmit}
        operation={encounter ? 'edit' : 'add'}
        // Pass any additional props to EncounterForm as needed
      /> */}
    </div>
  );
};

export default EncounterPage;
