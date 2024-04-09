import React from 'react';
import { useFormik } from 'formik';
import { Campaign, CampaignFormProps } from '../types';
import {
  calculateRestsNeeded,
  getLevelDetailsFromExperience,
  getAdventuringDayXpLimit,
} from '../constants/experienceConstants';

const CampaignForm: React.FC<CampaignFormProps> = ({
  campaign,
  onSubmit,
  operation,
}) => {
  if (!campaign) {
    // Handle the case where campaign is null
    return;
  }
  const levelDetails = getLevelDetailsFromExperience(
    campaign.playerExperienceStart
  );
  const adventuringDayXP = getAdventuringDayXpLimit(
    levelDetails.level,
    campaign.numberOfPlayers
  );

  const rests = calculateRestsNeeded(
    levelDetails.xpStart,
    levelDetails.xpEnd,
    campaign?.playerExperienceStart || 100,
    campaign?.numberOfPlayers,
    levelDetails.level
  );

  const formik = useFormik({
    initialValues: {
      id: campaign?.id || '',
      name: campaign?.name || '',
      slug: campaign?.slug || '',
      description: campaign?.description || '',
      numberOfPlayers: campaign?.numberOfPlayers || 1,
      playerExperienceStart: campaign?.playerExperienceStart || 100,
      levelOfPlayersCharactersStart: levelDetails.level,
      adventuringDayXPLimit: adventuringDayXP,
      groupDead: campaign?.groupDead ?? false,
      shortRestNeededFirst: rests.shortRestNeededFirst,
      shortRestNeededSecond: rests.shortRestNeededSecond,
      longRestNeeded: rests.longRestNeeded,
    },
    onSubmit: (values) => {
      let campaignData: Partial<Campaign> = { ...values };

      if (operation === 'edit') {
        campaignData = { ...values, id: values.id };
      }

      onSubmit(campaignData);
    },
  });

  const handleNumberOfPlayersChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedValue = e.target.value;
    formik.setFieldValue('numberOfPlayers', updatedValue);
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
        <p>xpStart: {levelDetails.xpStart}</p>
        <p>adventuringDayXP: {adventuringDayXP}</p>
        <p>xpEnd: {levelDetails.xpEnd}</p>
        <p>xpNeeded: {levelDetails.xpNeeded}</p>
        <p>level: {levelDetails.level}</p>
        <p>firstRestNeeded?: {rests.shortRestNeededFirst ? 'Yes' : 'No'}</p>
        <p>secondRestNeeded?: {rests.shortRestNeededSecond ? 'Yes' : 'No'}</p>
        <p>longRestNeeded?: {rests.longRestNeeded ? 'Yes' : 'No'}</p>
      </div>

      {/* Submit button */}
      <button type="submit" className="btn-primary">
        {campaign ? 'Update Campaign' : 'Add Campaign'}
      </button>
    </form>
  );
};

export default CampaignForm;
