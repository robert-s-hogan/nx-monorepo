import React, { ChangeEvent } from 'react';

export const Switch = ({
  checked,
  onToggle,
  className = '',
}: SwitchProps): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onToggle(e.target.checked);
  };

  return (
    <div
      className={`relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ${className}`}
    >
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        checked={checked}
        onChange={handleChange}
        className="toggle-checkbox hidden"
      />
      <label
        htmlFor="toggle"
        className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
    </div>
  );
};

export default Switch;
