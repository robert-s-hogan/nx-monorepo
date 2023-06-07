import React from 'react';
import { ValidatedInputProps } from '@with-nx/types';

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
  value,
  onChange,
  feedback,
  isValid,
}) => {
  return (
    <div className="flex flex-col">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border-2 rounded p-2 ${
          isValid ? 'border-green-500' : 'border-red-500'
        }`}
      />
      {!isValid && <span className="text-red-500 mt-1">{feedback}</span>}
    </div>
  );
};
