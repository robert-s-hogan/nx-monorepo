import React from 'react';
import { useFormik } from 'formik';
import { Campaign, CampaignFormProps } from '../types';

const CampaignForm: React.FC<CampaignFormProps> = ({
  campaign,
  onSubmit,
  operation,
}) => {
  const formik = useFormik({
    initialValues: {
      id: campaign?.id || '',
      name: campaign?.name || '',
      slug: campaign?.slug || '',
      description: campaign?.description || '',
      numberOfPlayers: campaign?.numberOfPlayers || 0,
      playerExperienceStart: campaign?.playerExperienceStart || 100,
      groupDead: campaign?.groupDead ?? false,
      rests: campaign?.rests || 1,
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

      {/* Submit button */}
      <button type="submit" className="btn-primary">
        {campaign ? 'Update Campaign' : 'Add Campaign'}
      </button>
    </form>
  );
};

export default CampaignForm;
