import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Difficulty, Encounter, EncounterFormProps } from '../types';
import { useCampaigns } from '../hooks/useCampaigns';
import {
  getAdventuringDayXpLimit,
  getLevelDetailsFromExperience,
  getRandomEncounterDifficulty,
  xpThresholdsByCharLvl,
} from '../constants/experienceConstants';

function formatFieldValue(value: any, inputType: string) {
  if (inputType === 'checkbox') {
    return value;
  }

  if (typeof value === 'boolean') {
    return value ? 'Yes' : 'No';
  }

  return value;
}

const EncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
}) => {
  const { selectedCampaign } = useCampaigns();
  const playerStartingExperience =
    encounter?.playerExperienceStart ||
    selectedCampaign?.playerExperienceStart ||
    0;
  const levelDetails = getLevelDetailsFromExperience(playerStartingExperience);
  const adventuringDayXP = getAdventuringDayXpLimit(
    levelDetails.level,
    selectedCampaign?.numberOfPlayers || 1
  );

  const [randomDifficulty, setRandomDifficulty] = useState<Difficulty>(() =>
    getRandomEncounterDifficulty()
  );

  const [xpThreshold, setXpThreshold] = useState(0);

  const formik = useFormik({
    initialValues: {
      id: encounter?.id || '',
      campaignId: selectedCampaign?.id || '',
      mapId: encounter?.mapId || 0,
      playerExperienceStart: playerStartingExperience,
      levelOfPlayersCharactersStart: levelDetails.level,
      adventuringDayXPLimit:
        encounter?.adventuringDayXPLimit || adventuringDayXP,
      adventuringDayXPStart:
        encounter?.adventuringDayXPStart || levelDetails.xpStart || 0,
      // adventuringDayXPFinish: encounter?.adventuringDayXPFinish || 0,
      // playerExperienceFinish:
      //   encounter?.playerExperienceFinish || playerStartingExperience,
      // levelOfPlayersCharactersFinish:
      //   encounter?.levelOfPlayersCharactersFinish || levelDetails.level || 0,
      encounterDifficultyOptions:
        encounter?.encounterDifficultyOptions || randomDifficulty,
      xpThreshold: encounter?.xpThreshold || xpThreshold,
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
      const startingQuadrantOfOpposition =
        values.startingQuadrantOfOpposition === 'true' ||
        values.startingQuadrantOfOpposition === true;

      let encounterData: Partial<Encounter> = {
        ...values,
        startingQuadrantOfOpposition,
      };

      if (operation === 'add') {
        delete encounterData.id;
      }

      onSubmit(encounterData);
    },
  });
  useEffect(() => {
    const thresholds = xpThresholdsByCharLvl[levelDetails.level];
    if (!thresholds) {
      console.error('Level details not found for the given level.');
      return;
    }

    const newThreshold = thresholds[randomDifficulty];

    if (formik.values.xpThreshold !== newThreshold) {
      setXpThreshold(newThreshold);
      formik.setFieldValue('xpThreshold', newThreshold, false);
    }

    if (formik.values.encounterDifficultyOptions !== randomDifficulty) {
      formik.setFieldValue(
        'encounterDifficultyOptions',
        randomDifficulty,
        false
      );
    }
  }, [levelDetails.level, randomDifficulty, formik]);

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
      {/* <pre>xpThreshold: {JSON.stringify(xpThreshold, null, 2)}</pre> */}
      <pre>levelDetails: {JSON.stringify(levelDetails, null, 2)}</pre>
      <pre>selectedCampaign: {JSON.stringify(selectedCampaign, null, 2)}</pre>
      {Object.entries(formik.values).map(([key, value]) => {
        if (key === 'id' || key === 'campaignId' || key === 'mapId') {
          return null;
        }

        const inputType = getInputType(value);

        const fieldValue = formatFieldValue(value, inputType);

        if (key === 'objective') {
          return (
            <div key={key} className="space-y-1">
              <label htmlFor={key}>{key}</label>
              <select
                id={key}
                name={key}
                onChange={formik.handleChange}
                value={fieldValue}
                className="form-select"
              >
                {/* Options */}
              </select>
            </div>
          );
        }

        return (
          <div key={key} className="space-y-1">
            <label htmlFor={key}>{key}</label>
            <input
              id={key}
              name={key}
              type={inputType}
              onChange={formik.handleChange}
              value={fieldValue}
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
