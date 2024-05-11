import React, { useState, useEffect } from 'react';
import { Button } from '@with-nx/generic-ui';
import {
  species,
  dndSizes,
  alignments,
  environments,
  specialTraits,
  languages,
} from '@with-nx/constants';

// Helper function to convert array items to select options
const toSelectOptions = (items) =>
  items.map((item) => ({ label: item, value: item }));

// Configuration for form fields
const fieldConfigs = [
  {
    name: 'numberOfPlayers',
    label: 'Number of Players',
    type: 'text',
  },
  {
    name: 'playerLevel',
    label: 'Player Level',
    type: 'text',
  },
  {
    name: 'challengeRating',
    label: 'Challenge Rating',
    type: 'select',
    options: toSelectOptions(Array.from({ length: 30 }, (_, i) => i + 1)),
  },
  {
    name: 'creatureType',
    label: 'Creature Type',
    type: 'select',
    options: toSelectOptions(species),
  },
  {
    name: 'alignment',
    label: 'Alignment',
    type: 'select',
    options: toSelectOptions(alignments),
  },
  {
    name: 'environment',
    label: 'Environment',
    type: 'select',
    options: toSelectOptions(environments),
  },
  {
    name: 'size',
    label: 'Size',
    type: 'select',
    options: toSelectOptions(dndSizes),
  },
  {
    name: 'specialTrait',
    label: 'Special Trait',
    type: 'select',
    options: toSelectOptions(specialTraits),
  },
  {
    name: 'language',
    label: 'Language',
    type: 'select',
    options: toSelectOptions(languages),
  },
];

// Validation function
const validateField = (name, value) => {
  if (!value) {
    return 'This field is required';
  }
  return '';
};

const CreatureGeneratorForm = ({ onSubmit, initialValues }) => {
  const [formValues, setFormValues] = useState(
    fieldConfigs.reduce(
      (values, field) => ({
        ...values,
        [field.name]: initialValues[field.name] || '', // Make sure each field is initialized from initialValues
      }),
      {}
    )
  );

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // This effect updates formValues when initialValues change
    setFormValues(
      fieldConfigs.reduce(
        (values, field) => ({
          ...values,
          [field.name]: initialValues[field.name] || '',
        }),
        {}
      )
    );
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    const newErrors = {};
    Object.keys(formValues).forEach((field) => {
      const error = validateField(field, formValues[field]);
      if (error) {
        newErrors[field] = error;
        valid = false;
      }
    });
    setErrors(newErrors);

    if (valid) {
      onSubmit(formValues);
    }
  };

  useEffect(() => {
    console.log('Initial form values set:', formValues);
  }, []);

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      onSubmit={handleSubmit}
    >
      {fieldConfigs.map(({ name, label, type, options }) => (
        <div key={name} className="flex flex-col">
          <label htmlFor={name}>{label}</label>
          <select
            name={name}
            value={formValues[name]}
            onChange={handleChange}
            className="input-field"
            disabled={type !== 'select'}
          >
            {options &&
              options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          <input
            type="text"
            name={name}
            value={formValues[name]}
            onChange={handleChange}
            className="input-field"
            disabled={type === 'select'}
          />
          {errors[name] && <div className="error-message">{errors[name]}</div>}
        </div>
      ))}
      <Button
        theme="primary"
        type="submit"
        className="col-span-3"
        text="Generate Creature"
      />
    </form>
  );
};

export default CreatureGeneratorForm;
