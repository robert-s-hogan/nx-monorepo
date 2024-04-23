import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useCampaigns } from '../hooks/useCampaigns';
import { useRestOperations } from '../hooks/useRestOperations';
import { useEncounterCalculations } from '../hooks/useEncounterCalculations';
import { Encounter, Campaign, Difficulty } from '../types';
import { FirestoreDocument } from '@with-nx/firebase';

interface EncounterFormProps {
  encounter: Encounter | null;
  onSubmit: (encounter: Encounter) => void;
  operation: 'add' | 'edit' | 'delete';
  campaignId: string;
  campaigns?: FirestoreDocument<Campaign>[];
}

function formatFieldValue(value: any, inputType: string) {
  if (inputType === 'checkbox') {
    return value ? 'Yes' : 'No';
  }
  return value;
}

const EncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
  campaignId,
  campaigns,
}) => {
  const { selectedCampaign } = useCampaigns();

  const {
    longRestNeeded,
    shortRestsAvailable,
    timeSpentResting,
    timeBetweenEncounters,
  } = useRestOperations(selectedCampaign as Campaign);

  if (!selectedCampaign) {
    return <p>No campaign selected</p>;
  }

  const { levelDetails, xpThresholds, adventuringDayXPLimit } =
    useEncounterCalculations(
      selectedCampaign,
      encounter?.encounterDifficultyOptions || 'Medium'
    );

  console.log(`adventuringDayXPLimit: ${adventuringDayXPLimit}`);

  const formik = useFormik({
    initialValues: {
      id: encounter?.id || '',
      campaignId: campaignId || '',
      playerExperienceStart: selectedCampaign?.playerExperienceStart || 0,
      levelOfPlayersCharactersStart: levelDetails?.level || 1,
      adventuringDayXPLimit:
        encounter?.adventuringDayXPLimit || adventuringDayXPLimit,
      encounterDifficultyOptions:
        encounter?.encounterDifficultyOptions || 'Medium',
      xpThreshold: encounter?.xpThreshold || xpThresholds['Medium'],
      longRestNeeded: encounter?.longRestNeeded || false,
      timeSpentResting: timeSpentResting || 0,
      timeBetweenEncounters: timeBetweenEncounters || 0,
      shortRestsAvailable: shortRestsAvailable || [false, false],
    },
    onSubmit: (values) => {
      let encounterData = {
        ...values,
        // startingQuadrantOfOpposition:
        //   values.startingQuadrantOfOpposition === 'true',
      };
      if (operation !== 'add') {
        encounterData.id = values.id;
      }

      // Casting onSubmit to the correct type signature
      onSubmit(encounterData as unknown as Encounter);
    },
  });

  useEffect(() => {
    // Update formik initialValues when adventuringDayXPLimit updates
    if (adventuringDayXPLimit !== formik.values.adventuringDayXPLimit) {
      formik.setFieldValue('adventuringDayXPLimit', adventuringDayXPLimit);
    }
  }, [adventuringDayXPLimit]);

  useEffect(() => {
    formik.setFieldValue(
      'xpThreshold',
      xpThresholds[formik.values.encounterDifficultyOptions]
    );
  }, [formik.values.encounterDifficultyOptions, xpThresholds]);

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <label htmlFor="encounterDifficultyOptions">Encounter Difficulty</label>
        <select
          id="encounterDifficultyOptions"
          name="encounterDifficultyOptions"
          onChange={formik.handleChange}
          value={formik.values.encounterDifficultyOptions}
          className="form-select"
        >
          {Object.keys(xpThresholds).map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      {Object.entries(formik.values).map(([key, value]) => {
        if (
          [
            'id',
            'campaignId',
            'levelOfPlayersCharactersStart',
            'playerExperienceStart',
            'encounterDifficultyOptions',
            'longRestNeeded',
          ].includes(key)
        ) {
          return null;
        }
        const inputType =
          typeof value === 'boolean' ? 'checkbox' : typeof value;
        const fieldValue = formatFieldValue(value, inputType);
        return (
          <div key={key} className="space-y-1">
            <label htmlFor={key}>{key}</label>
            <input
              id={key}
              name={key}
              type={inputType}
              onChange={formik.handleChange}
              value={fieldValue}
              className={
                inputType === 'checkbox' ? 'form-checkbox' : 'form-input'
              }
            />
          </div>
        );
      })}

      <button type="submit" className="btn-primary col-span-2">
        {operation === 'edit' ? 'Update Encounter' : 'Add Encounter'}
      </button>
    </form>
  );
};

export default EncounterForm;
