import React from 'react';
import { SearchBarProps } from '@with-nx/types';

const SearchBar = ({ placeholder = 'Search', icon }: SearchBarProps) => {
  return (
    <div className="flex items-center bg-gray-200 p-2 rounded-md">
      {icon && <span className="mr-2">{icon}</span>}
      <input
        className="w-full py-1 px-2 bg-gray-200 focus:outline-none"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
