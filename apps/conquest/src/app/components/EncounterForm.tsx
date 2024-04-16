import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Difficulty, Encounter, EncounterFormProps } from '../types';
import { useCampaigns } from '../hooks/useCampaigns';
import {
  getAdventuringDayXpLimit,
  getLevelDetailsFromExperience,
  getRandomEncounterDifficulty,
  xpThresholdsByCharLvl,
  getXPThresholds,
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

  //check that selectedCampaign is not undefined
  if (!selectedCampaign) {
    return <p>No campaign selected</p>;
  }

  useEffect(() => {
    // Assuming `selectedCampaign.numberOfPlayers` and `selectedCampaign.levelOfPlayersCharactersStart` are defined
    const numberOfPlayers = selectedCampaign.numberOfPlayers;
    const characterLevel = selectedCampaign.levelOfPlayersCharactersStart;
    const difficulty = formik.values.encounterDifficultyOptions;

    const thresholds = xpThresholdsByCharLvl[characterLevel];
    if (!thresholds) {
      console.error('Level details not found for the given level.');
      return;
    }

    const xpThresholdValue = getXPThresholds(
      formik.values.levelOfPlayersCharactersStart,
      selectedCampaign.numberOfPlayers, // Assuming selectedCampaign is a valid Campaign object
      formik.values.encounterDifficultyOptions
    );

    formik.setFieldValue('xpThreshold', xpThresholdValue);
  }, [
    formik.values.levelOfPlayersCharactersStart,
    selectedCampaign.numberOfPlayers,
    formik.values.encounterDifficultyOptions,
  ]);

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
      <pre>encounter: {JSON.stringify(encounter, null, 2)}</pre>
      <pre>selectedCampaign: {JSON.stringify(selectedCampaign, null, 2)}</pre>

      <div className="space-y-1">
        <label htmlFor="encounterDifficultyOptions">Encounter Difficulty</label>
        <select
          id="encounterDifficultyOptions"
          name="encounterDifficultyOptions"
          onChange={formik.handleChange}
          value={formik.values.encounterDifficultyOptions}
          className="form-select"
        >
          {Object.keys(xpThresholdsByCharLvl[1]).map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      {Object.entries(formik.values).map(([key, value]) => {
        // Exclude non-editable fields based on your criteria
        if (
          [
            'id',
            'campaignId',
            'mapId',
            'levelOfPlayersCharactersStart',
            'playerExperienceStart',
            'encounterDifficultyOptions',
            'longRestNeeded',
          ].includes(key)
        ) {
          return null;
        }

        const inputType = getInputType(value);
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

      {/* Submit button */}
      <button type="submit" className="btn-primary col-span-2">
        {operation === 'edit' ? 'Update Encounter' : 'Add Encounter'}
      </button>
    </form>
  );
};

export default EncounterForm;
