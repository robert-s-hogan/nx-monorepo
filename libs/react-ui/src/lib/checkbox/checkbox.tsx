import { CheckboxProps } from '@with-nx/types';
import { useState } from 'react';
import checkboxStyles from './checkbox.module.css';

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
      <label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleChange}
        />
        <span className={checkboxStyles.labelText}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
