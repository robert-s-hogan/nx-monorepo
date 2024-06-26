import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { Button, Heading } from '@with-nx/generic-ui';
import { useRestOperations } from '../hooks/useRestOperations';
import { useEncounterCalculations } from '../hooks/useEncounterCalculations';
import { Encounter, EncounterFormProps, Campaign } from '../types';
import { getRandomQuadrant } from '../utils/mapUtils';
import { useRandomMapSelection } from '../hooks/useRandomMapSelection';
import { mapConstants } from '../constants/mapConstants';
import { useCampaignsContext } from '../contexts/CampaignContext';

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
}) => {
  const { campaigns } = useCampaignsContext();
  const selectedCampaign =
    campaigns.find((campaign) => campaign.id === campaignId) || campaigns[0];

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
    <div className="grid grid-cols-1 gap-6">
      <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-x-4">
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

        <Button
          type="submit"
          theme="primary"
          text={operation === 'edit' ? 'Update Encounter' : 'Add Encounter'}
        />
      </form>
    </div>
  );
};

export default ConquestEncounterForm;
