import React from 'react';
import { useFormik } from 'formik';
import { Campaign, CampaignFormProps } from '../types';
import { generateSlug } from '@utils/generateSlug';

const CampaignForm: React.FC<CampaignFormProps> = ({
  campaign,
  onSubmit,
  operation,
}) => {
  const formik = useFormik({
    initialValues: {
      id: campaign?.id || '',
      name: campaign?.name || '',
      description: campaign?.description || '',
      playerLevel: campaign?.playerLevel || 1,
      playerExperienceStart: campaign?.playerExperienceStart || 100,
      encounterAdjustedExperience: campaign?.encounterAdjustedExperience || 0,
      encounterExperience: campaign?.encounterExperience || 0,
      groupDead: campaign?.groupDead ?? false,
      rests: campaign?.rests || 1,
    },
    onSubmit: (values) => {
      // Generate the slug from the campaign name
      const slug = generateSlug(values.name);
      // Include the slug in the submission values
      const submissionValues = { ...values, slug };
      // Pass the updated values including the slug to the parent's onSubmit handler
      onSubmit(submissionValues, campaign?.id);
    },
    // Optionally add a validation schema here if needed
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // First, prevent the default form submission behavior
        if (operation === 'edit' && campaign?.id) {
          onSubmit(formik.values, campaign.id);
        } else {
          onSubmit(formik.values);
        }
      }}
      className="flex flex-col space-y-4 pt-4"
    >
      <label htmlFor="name">Campaign Name</label>
      <input
        id="name"
        type="text"
        {...formik.getFieldProps('name')} // This replaces onChange, onBlur, value
        required
        placeholder="Enter New Campaign Name"
      />

      <label htmlFor="description">Campaign Description</label>
      <input
        id="description"
        type="text"
        {...formik.getFieldProps('description')}
        placeholder="Description"
      />

      <label htmlFor="playerLevel">Player Level</label>
      <input
        id="playerLevel"
        type="number"
        {...formik.getFieldProps('playerLevel')}
        required
        min="1"
        placeholder="Player Level"
      />

      <label htmlFor="playerExperienceStart">Player Experience Start</label>
      <input
        id="playerExperienceStart"
        type="number"
        {...formik.getFieldProps('playerExperienceStart')}
        required
        min="1"
        placeholder="Player Experience Start"
      />

      {operation === 'edit' && (
        <>
          <label htmlFor="encounterAdjustedExperience">
            Encounter Adjusted Experience
          </label>
          <input
            id="encounterAdjustedExperience"
            type="number"
            {...formik.getFieldProps('encounterAdjustedExperience')}
            required
            min="0"
            placeholder="Encounter Adjusted Experience"
          />
          <label htmlFor="encounterExperience">Encounter Experience</label>
          <input
            id="encounterExperience"
            type="number"
            {...formik.getFieldProps('encounterExperience')}
            required
            min="0"
            placeholder="Encounter Experience"
          />
          <label htmlFor="groupDead">Group Dead?</label>
          <input
            className="mr-auto"
            id="groupDead"
            type="checkbox"
            {...formik.getFieldProps('groupDead')}
          />
          <label htmlFor="rests">Rests</label>
          <input
            id="rests"
            type="number"
            {...formik.getFieldProps('rests')}
            required
            min="0"
            placeholder="Rests"
          />
        </>
      )}

      <button type="submit" className="btn-primary">
        {campaign ? 'Update Campaign' : 'Add Campaign'}
      </button>
    </form>
  );
};

export default CampaignForm;
