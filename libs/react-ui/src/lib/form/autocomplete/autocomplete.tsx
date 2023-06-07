import React, { useState } from 'react';
import { AutoCompleteProps } from '@with-nx/types';

export const AutoComplete: React.FC<AutoCompleteProps> = ({
  suggestions,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [displaySuggestions, setDisplaySuggestions] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setDisplaySuggestions(true);
    onChange(event.target.value);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setDisplaySuggestions(false);
    onChange(suggestion);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border-2 rounded p-2 w-full"
      />
      {displaySuggestions && (
        <div className="absolute z-10 bg-white border rounded w-full mt-2">
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((suggestion) => (
              <div
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
