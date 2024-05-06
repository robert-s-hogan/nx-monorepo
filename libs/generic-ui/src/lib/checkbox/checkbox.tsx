import React, { ChangeEvent } from 'react';

type CheckboxProps = {
  id: string;
  label: string;
  checked: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  className,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <>
      <input
        type="checkbox"
        id={id}
        className={className}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
