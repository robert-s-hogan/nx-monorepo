import React, { useEffect } from 'react';
import { useFormik } from 'formik';

import { Button } from '@with-nx/generic-ui';
import { CampaignFormProps, CampaignSubmissionData } from '../types';
import { getLevelDetailsFromExperience } from '../constants/experienceConstants';

const ConquestCampaignForm: React.FC<CampaignFormProps> = ({
  campaign,
  onSubmit,
  operation,
}) => {
  const initialLevelDetails = getLevelDetailsFromExperience(
    campaign?.playerExperienceStart || 100
  );

  const formik = useFormik({
    initialValues: {
      id: campaign?.id || '',
      name: campaign?.name || '',
      slug: campaign?.slug || '',
      description: campaign?.description || '',
      numberOfPlayers: campaign?.numberOfPlayers || 1,
      playerExperienceStart: campaign?.playerExperienceStart || 100,
      levelDetails: initialLevelDetails,
      groupDead: campaign?.groupDead ?? false,
      longRestNeeded: campaign?.longRestNeeded ?? false,
      shortRests: campaign?.shortRests || [],
    },
    onSubmit: (values) => {
      const submissionData: CampaignSubmissionData = {
        ...values,
        levelDetails: values.levelDetails,
      };
      console.log(`submissionData: ${JSON.stringify(submissionData, null, 2)}`);
      onSubmit(submissionData);
    },
  });

  useEffect(() => {
    const newLevelDetails = getLevelDetailsFromExperience(
      formik.values.playerExperienceStart
    );
    formik.setFieldValue('levelDetails', newLevelDetails);
  }, [formik.values.playerExperienceStart]);

  const handleNumberOfPlayersChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedValue = e.target.value;
    formik.setFieldValue('numberOfPlayers', updatedValue);
  };

  const handleShortRestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = Number(e.target.value);
    formik.setFieldValue('shortRests', Array(count).fill(true));
  };

  const longRestOptions = [
    { label: 'No', value: false },
    { label: 'Yes', value: true },
  ];

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
      {/* <pre>campaign: {JSON.stringify(campaign, null, 2)}</pre> */}

      {/* Name input */}
      <div className="space-y-1">
        <label htmlFor="name">Campaign Name</label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps('name')}
          required
          placeholder="Enter New Campaign Name"
        />
      </div>

      {/* Description input */}
      <div className="space-y-1">
        <label htmlFor="description">Campaign Description</label>
        <input
          id="description"
          type="text"
          {...formik.getFieldProps('description')}
          placeholder="Description"
        />
      </div>

      {/* Number of Players input */}
      <div className="space-y-1">
        <label htmlFor="numberOfPlayers">Number of Players</label>
        <input
          id="numberOfPlayers"
          type="number"
          {...formik.getFieldProps('numberOfPlayers')}
          onChange={handleNumberOfPlayersChange}
          required
          min="1"
          placeholder="Number of Players"
        />
      </div>

      {/* Player Experience Start input */}
      <div className="space-y-1">
        <label htmlFor="playerExperienceStart">Player Experience Start</label>
        <input
          id="playerExperienceStart"
          type="number"
          name="playerExperienceStart"
          onChange={formik.handleChange}
          value={formik.values.playerExperienceStart}
          required
          min="1"
          placeholder="Player Experience Start"
        />
      </div>

      {!campaign && (
        <>
          <div className="space-y-1">
            <label htmlFor="groupDead">Oh, they dead</label>
            <input
              id="groupDead"
              type="checkbox"
              checked={formik.values.groupDead}
              onChange={() =>
                formik.setFieldValue('groupDead', !formik.values.groupDead)
              }
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="longRestNeeded">Long Rest Needed</label>
            <select
              id="longRestNeeded"
              value={formik.values.longRestNeeded ? 'true' : 'false'}
              onChange={(e) =>
                formik.setFieldValue(
                  'longRestNeeded',
                  e.target.value === 'true'
                )
              }
            >
              {longRestOptions.map((option, index) => (
                <option key={index} value={String(option.value)}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="shortRests">Number of Short Rests Taken</label>
            <select
              id="shortRests"
              value={formik.values.shortRests.length}
              onChange={handleShortRestsChange}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
        </>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        theme="primary"
        text={operation === 'edit' ? 'Update Campaign' : 'Add Campaign'}
      />
    </form>
  );
};

export default ConquestCampaignForm;
