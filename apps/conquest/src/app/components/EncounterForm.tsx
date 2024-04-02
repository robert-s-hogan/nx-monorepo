import React from 'react';
import { useFormik } from 'formik';
import { Encounter, EncounterFormProps } from '@conquestTypes/Encounter';

const EncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
  // Include any other props specific to encounters that you might need
}) => {
  const formik = useFormik({
    initialValues: {
      // Define initial values based on Encounter type, e.g.,
      id: encounter?.id || '',
      campaignId: encounter?.campaignId || '',
      mapId: encounter?.mapId || 0,
      // Add other encounter fields here
    },
    onSubmit: (values) => {
      // Ensure numeric fields are converted to numbers
      const formValues: Partial<Encounter> = {
        ...values,
        id: values.id ? values.id : undefined, // Convert id to a number, or undefined if it's not provided
        campaignId: Number(values.campaignId), // Always convert campaignId to a number
        mapId: Number(values.mapId),
        // Handle other fields similarly, especially numeric fields
      };

      onSubmit(formValues); // Now passing correctly typed form values to the onSubmit function
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 pt-4"
    >
      {/* Add form fields for encounter attributes here, similar to CampaignForm */}
      <button type="submit" className="btn-primary">
        {encounter ? 'Update Encounter' : 'Add Encounter'}
      </button>
    </form>
  );
};

export default EncounterForm;
