'use client';

import { useState } from 'react';

interface TextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <label>{label}</label>
      <textarea
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label={label}
        aria-invalid={!value}
        aria-describedby={`${label}-error`}
      />
      {!value && isFocused && (
        <div id={`${label}-error`}>This field is required.</div>
      )}
    </div>
  );
};
