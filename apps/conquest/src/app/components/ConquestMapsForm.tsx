import React from 'react';
import { useFormFields } from '../hooks/useFormFields'; // Adjust the import path as necessary
import { ExtendedFieldConfig } from '../types';

const ConquestMapsForm = () => {
  // Call useFormFields with 'mapFormFields' to fetch fields for the maps form
  const { fields, loading, error } = useFormFields('mapFormFields');

  if (loading) return <div>Loading form fields...</div>;
  if (error) return <div>Error loading form fields: {error.message}</div>;

  return (
    <form>
      {fields.map((field: ExtendedFieldConfig) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {/* Render the input based on the field type */}
          {field.type === 'select' ? (
            <select id={field.name} name={field.name} required={field.required}>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default ConquestMapsForm;
