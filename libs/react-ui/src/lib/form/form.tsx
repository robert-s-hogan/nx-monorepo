import { FormProps } from '@with-nx/types';
import React, { useState } from 'react';

export const Form = ({ fields, onSubmit }: FormProps): JSX.Element => {
  const [values, setValues] = useState<{ [name: string]: string }>(
    fields.reduce((obj, field) => {
      obj[field.name] = '';
      return obj;
    }, {})
  );
  const [errors, setErrors] = useState<{ [name: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [name: string]: string } = {};
    fields.forEach((field) => {
      if (field.required && !values[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      } else if (
        field.pattern &&
        values[field.name] &&
        !field.pattern.test(values[field.name])
      ) {
        newErrors[field.name] = `${field.label} is invalid`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={values[field.name]}
            onChange={handleChange}
          />
          {errors[field.name] ? (
            <div className="text-red-500">{errors[field.name]}</div>
          ) : null}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
