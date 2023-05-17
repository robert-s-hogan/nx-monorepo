import { CheckboxProps } from '@with-nx/types';
import { useState } from 'react';
import checkboxStyles from './checkbox.module.css';

export const Checkbox = ({
  label,
  name,
  onChange,
}: CheckboxProps): JSX.Element => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setChecked(newCheckedState);
    onChange(newCheckedState);
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
