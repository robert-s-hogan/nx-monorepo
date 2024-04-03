import React from 'react';
import { useFormik } from 'formik';
import { Encounter, EncounterFormProps } from '../types';
import { dndGameObjectives } from '../../../../../libs/constants/src/lib/dnd-encounter';

const EncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
}) => {
  const formik = useFormik({
    initialValues: {
      id: encounter?.id || '',
      campaignId: encounter?.campaignId || 0,
      mapId: encounter?.mapId || 0,
      playerExperienceStart: encounter?.playerExperienceStart || 0,
      adventuringDayXPLimit: encounter?.adventuringDayXPLimit || 0,
      adventuringDayXPStart: encounter?.adventuringDayXPStart || 0,
      encounterDifficultyOptions: encounter?.encounterDifficultyOptions || '',
      adventuringDayXPFinish: encounter?.adventuringDayXPFinish || 0,
      playerExperienceEarnedFromEncounter:
        encounter?.playerExperienceEarnedFromEncounter || 0,
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
        encounter?.startingQuadrantOfOpposition || false,
      objective: encounter?.objective || '',
      timeOfDay: encounter?.timeOfDay || '',
      weather: encounter?.weather || false,
      cumulativeGoldEarnedStart: encounter?.cumulativeGoldEarnedStart || 0,
      goldEarnedPerPlayer: encounter?.goldEarnedPerPlayer || 0,
      cumulativeGoldEarnedFinish: encounter?.cumulativeGoldEarnedFinish || 0,
      doesCaravanAppear: encounter?.doesCaravanAppear || false,
    },
    onSubmit: (values) => {
      const formValues: Partial<Encounter> = {
        ...values,
        // Convert string IDs to number as needed or keep as strings depending on your backend requirements
        id: operation === 'edit' ? values.id : undefined, // Presume undefined for new encounters
      };

      onSubmit(formValues);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 pt-4"
    >
      {/* Example of select field for 'objective' */}
      <div className="space-y-1">
        <label htmlFor="objective">Objective</label>
        <select
          id="objective"
          name="objective"
          onChange={formik.handleChange}
          value={formik.values.objective}
          className="form-select"
        >
          <option value="defeat">Defeat</option>
          <option value="rescue">Rescue</option>
          <option value="escape">Escape</option>
          <option value="deliver">Deliver</option>
          <option value="retrieve">Retrieve</option>
          <option value="discover">Discover</option>
          <option value="destroy">Destroy</option>
          <option value="investigate">Investigate</option>
          <option value="negotiate">Negotiate</option>
          <option value="protect">Protect</option>
          <option value="steal">Steal</option>
          <option value="survive">Survive</option>
        </select>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn-primary">
        {operation === 'edit' ? 'Update Encounter' : 'Add Encounter'}
      </button>
    </form>
  );
};

export default EncounterForm;
