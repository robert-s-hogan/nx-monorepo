import { FormProps } from '@with-nx/types';
import React, { useState } from 'react';

export const Form = ({ fields, onSubmit, action }: FormProps): JSX.Element => {
  const [values, setValues] = useState<{ [name: string]: string }>(
    fields.reduce((obj, field) => {
      obj[field.name] = '';
      return obj;
    }, {} as { [name: string]: string }) // Add index signature to the type of obj
  );
  const [errors, setErrors] = useState<{ [name: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement & HTMLTextAreaElement;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      e.preventDefault(); // Prevent form submission if there are validation errors
      setErrors(newErrors);
    } else {
      if (onSubmit && onSubmit(values) === false) {
        e.preventDefault(); // Prevent form submission if onSubmit returns false
      }
      // The form will be submitted to the URL specified in the action attribute
    }
  };

  return (
    <form onSubmit={handleSubmit} action={action ? action : ''} method="post">
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={values[field.name]}
              onChange={handleChange}
            />
          )}
          {errors[field.name] ? (
            <div className="text-error">{errors[field.name]}</div>
          ) : null}
        </div>
      ))}
      <button className="btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
