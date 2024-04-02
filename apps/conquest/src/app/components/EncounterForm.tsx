import React from 'react';
import { useFormik } from 'formik';
import { Encounter, EncounterFormProps } from '../types'; // Assuming you have these types defined

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
      onSubmit(values); // Call onSubmit provided by the parent component
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
