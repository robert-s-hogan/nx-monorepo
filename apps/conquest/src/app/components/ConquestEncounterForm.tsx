import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Heading } from '@with-nx/generic-ui';

import { useCampaigns } from '../hooks/useCampaigns';
import { useRestOperations } from '../hooks/useRestOperations';
import { useEncounterCalculations } from '../hooks/useEncounterCalculations';
import { Encounter, EncounterFormProps, Campaign, Difficulty } from '../types';
import { getRandomQuadrant } from '../utils/mapUtils';
import { useRandomMapSelection } from '../hooks/useRandomMapSelection';
import { mapConstants } from '../constants/mapConstants';

function formatFieldValue(value: any, inputType: string) {
  if (inputType === 'checkbox') {
    return value ? 'Yes' : 'No';
  }
  return value;
}

const ConquestEncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
  campaignId,
  campaigns,
}) => {
  const { selectedCampaign } = useCampaigns();

  const {
    shortRestsAvailable,
    timeSpentResting,
    timeBetweenEncounters,
    takeLongRest,
  } = useRestOperations(selectedCampaign as Campaign);

  const {
    objective,
    size,
    terrain,
    timeOfDay,
    weather,
    weatherChange,
    weatherSeverity,
    weatherType,
  } = useRandomMapSelection(mapConstants);

  if (!selectedCampaign) {
    return <p>No campaign selected</p>;
  }

  const { levelDetails, xpThresholds, adventuringDayXPLimit } =
    useEncounterCalculations(
      selectedCampaign,
      encounter?.encounterDifficultyOptions || 'Medium'
    );

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
      adjustedExperience: encounter?.adjustedExperience || 0,
      encounterXP: encounter?.encounterXP || 0,
    },
    onSubmit: (values) => {
      let encounterData = {
        ...values,
      };
      if (operation !== 'add') {
        encounterData.id = values.id;
      }

      onSubmit(encounterData as unknown as Encounter);
    },
  });

  useEffect(() => {
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

  let firstQuadrant = getRandomQuadrant();

  let secondQuadrant = getRandomQuadrant(firstQuadrant);

  const mapSelection = {
    objective,
    size,
    terrain,
    timeOfDay,
    weather,
    weatherChange,
    weatherSeverity,
    weatherType,
  };

  return (
    <div className="grid grid-cols-2">
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="encounterDifficultyOptions">
            Encounter Difficulty
          </label>
          <select
            id="encounterDifficultyOptions"
            name="encounterDifficultyOptions"
            onChange={formik.handleChange}
            value={formik.values.encounterDifficultyOptions}
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
              'timeSpentResting',
              'shortRestsAvailable',
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
      <div className="border border-black p-4 mx-6 rounded-md">
        <Heading level={2} text="Preview" className="text-center" />
        <p>Team Quadrant: {firstQuadrant}</p>
        <p>Enemy Quadrant: {secondQuadrant}</p>
        <div>
          <Heading level={3} text="Random Selection" />
          <p>
            <strong>Objective:</strong> {mapSelection.objective}
          </p>
          <p>
            <strong>Size:</strong> {mapSelection.size}
          </p>
          <p>
            <strong>Terrain:</strong> {mapSelection.terrain}
          </p>
          <p>
            <strong>Time of Day:</strong> {mapSelection.timeOfDay}
          </p>
          <p>
            <strong>Weather:</strong> {mapSelection.weather}
          </p>
          <p>
            <strong>Weather Change:</strong> {mapSelection.weatherChange}
          </p>
          <p>
            <strong>Weather Severity:</strong> {mapSelection.weatherSeverity}
          </p>
          <p>
            <strong>Weather Type:</strong> {mapSelection.weatherType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConquestEncounterForm;
