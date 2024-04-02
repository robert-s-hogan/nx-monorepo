import React from 'react';
import { useFormik } from 'formik';
import { Encounter, EncounterFormProps } from '@conquestTypes/Encounter';

const EncounterForm: React.FC<EncounterFormProps> = ({
  encounter,
  onSubmit,
  operation,
}) => {
  const formik = useFormik({
    initialValues: {
      id: encounter?.id || '',
      campaignId: encounter?.campaignId || '',
      mapId: encounter?.mapId || 0,
    },
    onSubmit: (values) => {
      const formValues: Partial<Encounter> = {
        ...values,
        id: values.id ? values.id : undefined,
        campaignId: Number(values.campaignId),
        mapId: Number(values.mapId),
      };

      onSubmit(formValues);
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
