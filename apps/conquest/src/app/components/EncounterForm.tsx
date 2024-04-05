import React from 'react';
import { useFormik } from 'formik';
import { Encounter, EncounterFormProps } from '../types';
import { useCampaigns } from '../hooks/useCampaigns'; // Assuming useCampaigns is in the hooks directory
import { dndGameObjectives } from '../../../../../libs/constants/src/lib/dnd-encounter';

function formatFieldValue(value: any, inputType: string) {
  // For checkboxes, return the value as is, since they work with boolean values
  if (inputType === 'checkbox') {
    return value;
  }

  // Convert boolean values to strings for all other input types
  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No'; // or simply value.toString()
  }

  // Return the value as is for non-boolean types
  return value;
}

const EncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
}) => {
  const { campaigns, selectedCampaign } = useCampaigns();

  const formik = useFormik({
    initialValues: {
      id: encounter?.id || '',
      campaignId: selectedCampaign?.id || '',
      mapId: encounter?.mapId || 0,
      playerExperienceStart: selectedCampaign?.playerExperienceStart || 0,
      adventuringDayXPLimit: encounter?.adventuringDayXPLimit || 0,
      adventuringDayXPStart: encounter?.adventuringDayXPStart || 0,
      encounterDifficultyOptions: encounter?.encounterDifficultyOptions || '',
      adventuringDayXPFinish: encounter?.adventuringDayXPFinish || 0,
      // playerExperienceEarnedFromEncounter:
      //   encounter?.playerExperienceEarnedFromEncounter || 0,
      playerExperienceFinish: encounter?.playerExperienceFinish || 0,
      levelOfPlayersCharactersFinish:
        encounter?.levelOfPlayersCharactersFinish || 0,
      shortRestNeededFirst: encounter?.shortRestNeededFirst || '',
      shortRestNeededSecond: encounter?.shortRestNeededSecond || '',
      longRestNeeded: encounter?.longRestNeeded || false,
      timeSpentBetweenResting: encounter?.timeSpentBetweenResting || 0,
      timeBetweenEncounters: encounter?.timeBetweenEncounters || '',
      mapShape: encounter?.mapShape || '',
      mapTerrainType: encounter?.mapTerrainType || '',
      startingQuadrantOfOpposition:
        encounter?.startingQuadrantOfOpposition || '',
      objective: encounter?.objective || '',
      timeOfDay: encounter?.timeOfDay || '',
      weather: encounter?.weather || false,
      // cumulativeGoldEarnedStart: encounter?.cumulativeGoldEarnedStart || 0,
      // goldEarnedPerPlayer: encounter?.goldEarnedPerPlayer || 0,
      // cumulativeGoldEarnedFinish: encounter?.cumulativeGoldEarnedFinish || 0,
      // doesCaravanAppear: encounter?.doesCaravanAppear || false,
    },
    onSubmit: (values) => {
      // Convert startingQuadrantOfOpposition to boolean if it's a string
      const startingQuadrantOfOpposition =
        values.startingQuadrantOfOpposition === 'true' ||
        values.startingQuadrantOfOpposition === true;

      let encounterData: Partial<Encounter> = {
        ...values,
        startingQuadrantOfOpposition,
      };

      // Remove the id property for 'add' operation to avoid sending an empty string as ID
      if (operation === 'add') {
        delete encounterData.id;
      }

      onSubmit(encounterData);
    },
  });

  // Function to determine input type based on value
  const getInputType = (value: any) => {
    switch (typeof value) {
      case 'boolean':
        return 'checkbox';
      case 'number':
        return 'number';
      default:
        return 'text';
    }
  };

  console.log(`selectedCampaign`, selectedCampaign);

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
      {Object.entries(formik.values).map(([key, value]) => {
        if (key === 'id' || key === 'campaignId' || key === 'mapId') {
          return null;
        }

        const inputType = getInputType(value);

        // Use the utility function to format the field value
        const fieldValue = formatFieldValue(value, inputType);

        if (key === 'objective') {
          return (
            <div key={key} className="space-y-1">
              <label htmlFor={key}>{key}</label>
              <select
                id={key}
                name={key}
                onChange={formik.handleChange}
                value={fieldValue} // Use the formatted field value
                className="form-select"
              >
                {/* Options */}
              </select>
            </div>
          );
        }

        // Render other fields
        return (
          <div key={key} className="space-y-1">
            <label htmlFor={key}>{key}</label>
            <input
              id={key}
              name={key}
              type={inputType}
              onChange={formik.handleChange}
              value={fieldValue} // Use the formatted field value
              className="form-input"
            />
          </div>
        );
      })}

      {/* Submit button */}
      <button type="submit" className="btn-primary col-span-2">
        {operation === 'edit' ? 'Update Encounter' : 'Add Encounter'}
      </button>
    </form>
  );
};

export default EncounterForm;
