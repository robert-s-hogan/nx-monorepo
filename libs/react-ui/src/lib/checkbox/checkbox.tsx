import { CheckboxProps } from '@with-nx/types';
import { useState } from 'react';
import checkboxStyles from './checkbox.module.css';

export const Checkbox = ({ label, onChange }: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span className={checkboxStyles.labelText}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
