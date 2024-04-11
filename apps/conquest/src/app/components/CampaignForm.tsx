import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Campaign, CampaignFormProps, CampaignSubmissionData } from '../types';
import {
  getAdventuringDayXpLimit,
  getLevelDetailsFromExperience,
} from '../constants/experienceConstants';

const CampaignForm: React.FC<CampaignFormProps> = ({
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
      levelDetails: initialLevelDetails, // Store the entire levelDetails object
      groupDead: campaign?.groupDead ?? false,
    },
    onSubmit: (values) => {
      const submissionData: CampaignSubmissionData = {
        ...values,
        levelDetails: values.levelDetails, // Make sure this line is correctly including levelDetails
      };
      console.log(`submissionData: ${JSON.stringify(submissionData, null, 2)}`);
      onSubmit(submissionData); // Ensure this onSubmit is correctly handling the data
    },
  });

  // Effect to update levelDetails as playerExperienceStart changes
  useEffect(() => {
    const newLevelDetails = getLevelDetailsFromExperience(
      formik.values.playerExperienceStart
    );
    formik.setFieldValue('levelDetails', newLevelDetails);
    console.log(formik.values); // Log to verify levelDetails is updated
  }, [formik.values.playerExperienceStart]);

  const handleNumberOfPlayersChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedValue = e.target.value;
    formik.setFieldValue('numberOfPlayers', updatedValue);
  };

  const calculateProgressPercentage = () => {
    const xpStart = formik.values.levelDetails.xpStart;
    const xpEnd = formik.values.levelDetails.xpEnd;
    const playerXp = formik.values.playerExperienceStart;
    const progress = ((playerXp - xpStart) / (xpEnd - xpStart)) * 100;
    return Math.min(Math.max(progress, 0), 100); // Clamps the value between 0 and 100
  };
  const [showTooltip, setShowTooltip] = useState(false);
  const progressPercentage = calculateProgressPercentage();

  // Function to format the tooltip text
  const getTooltipText = () => {
    const xpStart = formik.values.levelDetails.xpStart;
    const playerXp = formik.values.playerExperienceStart;
    const xpIntoLevel = playerXp - xpStart;
    const xpNeeded = formik.values.levelDetails.xpNeeded;
    return `${xpIntoLevel} / ${xpNeeded} XP into Level`;
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 pt-4"
    >
      <pre>campaign: {JSON.stringify(campaign, null, 2)}</pre>

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

      <div className="space-y-1">
        <h3>Calculations</h3>
      </div>

      {/* Level of Players Characters Start input */}
      <div className="grid grid-cols-2 gap-1 space-y-1">
        <p>Level: {formik.values.levelDetails.level}</p>
        <div
          className="w-full bg-gray-200 rounded h-2 relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div
            className="bg-blue-600 h-2 rounded"
            style={{ width: `${progressPercentage}%` }}
          ></div>
          {showTooltip && (
            <div
              className="absolute -top-8 left-0 bg-black text-white text-sm p-1 rounded"
              style={{ marginLeft: `${progressPercentage}%` }}
            >
              {getTooltipText()}
            </div>
          )}
        </div>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn-primary">
        {operation === 'edit' ? 'Update Campaign' : 'Add Campaign'}
      </button>
    </form>
  );
};

export default CampaignForm;
