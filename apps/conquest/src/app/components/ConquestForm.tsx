import React from 'react';
import { useFormik } from 'formik';

import GenericField from './ConquestField';
import { FieldConfig } from '../types';

export interface ConquestFormProps {
  fields: FieldConfig[];
  onSubmit: (values: any) => void; // Replace 'any' with a more specific type if needed
  operation: 'add' | 'edit';
  initialValues?: { [key: string]: any }; // Replace 'any' with a more specific type if needed
}

const ConquestForm: React.FC<ConquestFormProps> = ({
  fields,
  onSubmit,
  operation,
  initialValues,
}) => {
  const formik = useFormik({
    initialValues: fields.reduce(
      (values, field) => ({
        ...values,
        [field.name]: initialValues?.[field.name] || field.initialValue || '',
      }),
      {}
    ),
    onSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col space-y-4 pt-4"
    >
      {fields.map((field) => (
        <GenericField
          key={field.name}
          {...field}
          {...formik.getFieldProps(field.name)}
        />
      ))}
      <button type="submit" className="btn-primary">
        {operation === 'edit' ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default ConquestForm;
