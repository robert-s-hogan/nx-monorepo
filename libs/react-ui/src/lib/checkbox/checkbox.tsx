import { CheckboxProps } from '@with-nx/types';
import { useState } from 'react';

export const Checkbox = ({
  label,
  name,
  checked,
  onChange,
}: CheckboxProps): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
          className="form-checkbox text-blue-500"
        />
        <span className="ml-2">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
